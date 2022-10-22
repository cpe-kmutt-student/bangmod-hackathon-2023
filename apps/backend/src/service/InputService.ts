import { ParticipantRepository } from '@/database/repository/ParticipantRepository';
import { TeamRepository } from '@/database/repository/TeamRepository';
import { Participant, Team } from '@prisma/client';
import { AdvisorFormData, RegistrationFormData, RegistrationFormDataTemplate, StudentFormData, TeamFormData } from 'api-schema';

export type PartialRegisForm = {
  students: Partial<StudentFormData>[],
  team: Partial<TeamFormData>,
  advisor: Partial<AdvisorFormData>,
}

export class InputService {

  private readonly participantRepository: ParticipantRepository
  private readonly teamRepository: TeamRepository

  public constructor(
    participantRepository: ParticipantRepository,
    teamRepository: TeamRepository
  ) {
    this.participantRepository = participantRepository;
    this.teamRepository = teamRepository;
  }

  private excludeEmpty<T extends Object>(object: T): Partial<T> {
    return Object.fromEntries(Object.entries(object).filter(([key, value]) => {
      return value !== null && value !== undefined && value !== '';
    })) as Partial<T>;
  }

  private validDefault(data: any): boolean {
    return typeof (data) === "string";
  }

  private validEmail(data: any): boolean {
    const emailTest = /^[^@]+@\w+(\.\w+)+\w$/
    return typeof (data) === "string" && emailTest.test(data)
  }

  private validPrefixEn(data: any): boolean {
    return typeof (data) === "string" && ["Mr.", "Mrs.", "Miss."].includes(data);
  }

  private validPrefixTh(data: any): boolean {
    return typeof (data) === "string" && ["นาย", "นางสาว", "นาง"].includes(data);
  }

  private validPhone(data: any): boolean {
    return typeof (data) === "string" && data.length === 10;
  }

  private validParticipant(participant: any): boolean {
    for (const key in participant) {
      if (key === 'email' && !this.validEmail(participant[key])) return false;
      else if (key === 'phoneNumber' && !this.validPhone(participant[key])) return false;
      else if (key === 'prefixEn' && !this.validPrefixEn(participant[key])) return false;
      else if (key === 'prefixTh' && !this.validPrefixTh(participant[key])) return false;
      else {
        if (!this.validDefault(participant[key])) return false;
      }
    }
    return true;
  }

  private validInput(data: PartialRegisForm): boolean {
    if (!this.validKey(data)) return false;

    const { students, team, advisor } = data;
    if (!students || !team || !advisor) return false;

    if (!team.amount) return false;
    team.amount = Number.parseInt(team.amount.toString());

    if (team.amount && (team.amount !== 2 && team.amount !== 3)) return false;
    if (!!team.isComplete && typeof team.isComplete !== 'boolean') return false;
    if(team.school && !this.validDefault(team.school)) return false;
    if(team.name && !this.validDefault(team.name)) return false;

    this.validParticipant(advisor);
    if (students.length < 0 && students.length > 3) return false;
    const isSomeStudentsInvalid = students.some((student) => !this.validParticipant(student));
    if (isSomeStudentsInvalid) return false;
    return true;
  }

  private validKey(data: any): boolean {
    if (!data || typeof data !== 'object') return false;

    const hasInvalidKey = Object
      .keys(data)
      .some((key) => !['students', 'team', 'advisor'].includes(key));
    if (hasInvalidKey) return false;

    const { students, team, advisor } = data;

    if (team) {
      const teamKey = Object.keys(RegistrationFormDataTemplate.team);
      for (const key in team) {
        if (!teamKey.includes(key)) return false
      }
    }

    if (advisor) {
      const advisorKey = Object.keys(RegistrationFormDataTemplate.advisor);
      for (const key in advisor) {
        if (!advisorKey.includes(key)) return false
      }
    }

    if (Array.isArray(students) && students.length > 0) {
      if (students.length < 1 || students.length > 3) return false;
      const studentKey = Object.keys(RegistrationFormDataTemplate.students[0]);
      for (const student of students) {
        for (const key in student) {
          if (!studentKey.includes(key)) return false;
        }
      }
    }

    return true;
  }

  private haveAllKeyAndNotNull(registrationFormData: any): boolean {
    if (!registrationFormData) return false;

    for (const key in registrationFormData) {
      if (!['students', 'team', 'advisor'].includes(key)) return false;
    }

    const { students, team, advisor } = registrationFormData;

    if (!students || !team || !advisor) return false;

    for (const key in RegistrationFormDataTemplate.team) {
      if (key !== 'isComplete') {
        if (!team[key]) return false;
      } else {
        if (typeof (team[key]) !== 'boolean') return false;
      }
    }

    for (const key in RegistrationFormDataTemplate.advisor) {
      if (!['midddleNameEn', 'middleNameTh'].includes(key) && !advisor[key]) return false;
    }

    if (!Array.isArray(students) || students.length < 2 || students.length > 3) return false;

    for (const student of students) {
      for (const key in RegistrationFormDataTemplate.students[0]) {
        if (!['midddleNameEn', 'middleNameTh', 'foodType', 'foodAllergy', 'drugAllergy', 'disease'].includes(key) && !student[key]) return false;
      }
    }

    return true
  }

  public async getInputByEmail(email: string): Promise<RegistrationFormData | null> {
    const team = await this.teamRepository.getTeamByEmail(email);
    if (!team) return null;

    const getTeamForm = await this.teamRepository.getTeamIntoFormByEmail(email);
    if (!getTeamForm) return null;

    const students = await this.participantRepository.getStudentsDataIntoFormByTeamId(team.id);
    const advisor = await this.participantRepository.getAdvisorDataIntoFormByTeamId(team.id);
    const teamFormData = { ...getTeamForm, amount: students.length };

    let advisorFormData: AdvisorFormData;
    if (advisor) {
      advisorFormData = { ...advisor };
    } else {
      advisorFormData = {
        email: null,
        firstnameEn: null,
        firstnameTh: null,
        lineId: null,
        middleNameEn: null,
        middleNameTh: null,
        phoneNumber: null,
        prefixEn: null,
        prefixTh: null,
        surnameEn: null,
        surnameTh: null,
      };
    }

    return { students: students, team: teamFormData, advisor: advisorFormData };
  }

  public async saveInputByEmail(
    email: string, registrationFormData: RegistrationFormData,
  ): Promise<PartialRegisForm | null> {
    const { students, team, advisor } = registrationFormData;

    if (!students || !team || !advisor) {
      throw Error('No data provided');
    }

    const partialTeam = this.excludeEmpty(team);
    const partialAdvisor = this.excludeEmpty(advisor);
    const partialStudents: Partial<StudentFormData>[] = []

    students.forEach((student) => {
      partialStudents.push(this.excludeEmpty(student));
    });

    const registerForm: PartialRegisForm = {
      team: partialTeam,
      advisor: partialAdvisor,
      students: partialStudents
    }

    if (!this.validInput(registerForm)) {
      throw Error('Input that not null invalid value');
    }
    if (partialTeam.isComplete && !this.haveAllKeyAndNotNull(registerForm)) {
      throw Error('Submit complete but all input not completed');
    };

    const teamId = await this.saveTeamByEmail(email, partialTeam);
    await this.saveStudentsByTeamId(teamId, partialStudents);
    await this.saveAdvisorByTeamId(teamId, partialAdvisor);
    return registerForm;
  }

  private async saveTeamByEmail(email: string, team: Partial<TeamFormData>): Promise<number> {
    if (!!team.amount) delete team.amount;
    const dataToSave: Partial<Team> = { ...team };
    const searchTeam = await this.teamRepository.getTeamByEmail(email);

    if (searchTeam) {
      const updateTeam = await this.teamRepository.updateTeamByEmail(email, dataToSave);
      return updateTeam.id;
    }

    const createTeam = await this.teamRepository.createTeamByEmail(email, dataToSave);
    return createTeam.id;
  }

  private async saveAdvisorByTeamId(teamId: number, advisor: Partial<AdvisorFormData>): Promise<void> {
    const participant = await this.participantRepository.getAdvisorDataByTeamId(teamId);
    const dataToSave: Partial<Participant> = { ...advisor };

    if (Object.keys(dataToSave).length === 0) return;
    if (participant) await this.participantRepository.updateParticipantById(participant.id, dataToSave);
    else await this.participantRepository.createAdvisor(dataToSave, teamId);
  }

  private async saveStudentsByTeamId(teamId: number, students: Partial<StudentFormData>[]): Promise<void> {
    const participants = await this.participantRepository.getStudentsDataByTeamId(teamId);
    const dataStudents: Partial<Participant>[] = students.filter((dataStudent) => Object.keys(dataStudent).length !== 0);

    // Never have students in database
    if (participants.length === 0) {
      dataStudents.forEach((dataStudent) => dataStudent.teamId = teamId);
      await this.participantRepository.createStudents(dataStudents);
    } else if (participants.length === dataStudents.length) {
      for (let i = 0; i < dataStudents.length; i++) {
        await this.participantRepository.updateParticipantById(participants[i].id, dataStudents[i]);
      }
    } else if (participants.length > dataStudents.length) {
      for (let i = participants.length - 1; i >= dataStudents.length; i--) {
        await this.participantRepository.deleteParticipantById(participants[i].id);
      }
      for (let i = 0; i < dataStudents.length; i++) {
        await this.participantRepository.updateParticipantById(participants[i].id, dataStudents[i]);
      }
    } else {
      // Case dataStudent.length > database.length
      for (let i = 0; i < participants.length; i++) {
        await this.participantRepository.updateParticipantById(participants[i].id, dataStudents[i]);
      }
      for (let i = participants.length; i < dataStudents.length; i++) {
        await this.participantRepository.createStudent(dataStudents[i], teamId);
      }
    }
  }

  public async createTeamIfNotPresent(email: string) {
    const team = await this.teamRepository.getTeamByEmail(email);
    if (team) return;

    await this.teamRepository.createEmptyTeam(email);
  }

}
