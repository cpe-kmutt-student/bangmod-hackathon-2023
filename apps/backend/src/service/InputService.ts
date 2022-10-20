import { ParticipantRepository } from '@/database/repository/ParticipantRepository';
import { TeamRepository } from '@/database/repository/TeamRepository';
import { Participant, Team } from '@prisma/client';
import { AdvisorFormData, RegistrationFormData, StudentFormData, TeamFormData } from 'api-schema';

type PartialRegisForm = {
  students: Partial<StudentFormData>[],
  team: Partial<TeamFormData>,
  advisor: Partial<AdvisorFormData>
}

export class InputService {

  private readonly participantRepository: ParticipantRepository
  private readonly teamRepository: TeamRepository

  private readonly template: RegistrationFormData = {
    students: [
      {
        drugAllergy: null,
        quote: null,
        foodAllergy: "",
        email: "shinnapatjr@gmail.com",
        grade: "Sophomore",
        lineId: "shinnapat_krabphom",
        disease: "",
        middleNameEn: null,
        middleNameTh: "",
        firstnameEn: "Shinnapat",
        firstnameTh: "ชินพรรธน์",
        nickname: "เปปเปอร์",
        phoneNumber: "0875908288",
        foodType: "อะไรก็ได้",
        prefixEn: "Mr.",
        prefixTh: "นาย",
        surnameEn: "Koparamestrisin",
        surnameTh: "โกปาราเมศไตรสิน",
      },
      {
        drugAllergy: "",
        quote: "",
        foodAllergy: "",
        email: "shin_gg@hotmail.com",
        grade: "",
        lineId: "",
        disease: "",
        middleNameEn: "",
        middleNameTh: null,
        firstnameEn: "PPHamster",
        firstnameTh: "พีพีแฮมสเตอร์",
        nickname: "พีพี",
        phoneNumber: "0812345678",
        foodType: "บาร์บีก้อน",
        prefixEn: "Mr.",
        prefixTh: "นาย",
        surnameEn: "Incursio",
        surnameTh: "อินครูซิโอ้"
      }, {
        drugAllergy: "",
        quote: "",
        foodAllergy: "",
        email: "",
        grade: "",
        lineId: "",
        disease: "",
        middleNameEn: "",
        middleNameTh: "",
        firstnameEn: "",
        firstnameTh: "",
        nickname: "",
        phoneNumber: "",
        foodType: "",
        prefixEn: "",
        prefixTh: "",
        surnameEn: "",
        surnameTh: ""
      },
    ],
    team: {
      amount: 0,
      school: "KMUTT",
      name: "Made In Abyss",
      isComplete: false,
    },
    advisor: {
      email: "",
      lineId: "",
      middleNameEn: "",
      middleNameTh: "",
      firstnameEn: "",
      firstnameTh: "",
      phoneNumber: "",
      prefixEn: null,
      prefixTh: null,
      surnameEn: "",
      surnameTh: ""
    }
  }

  public constructor(
    participantRepository: ParticipantRepository,
    teamRepository: TeamRepository
  ) {
    this.participantRepository = participantRepository;
    this.teamRepository = teamRepository;
  }

  private filterNull(object: StudentFormData | AdvisorFormData | TeamFormData | Participant | Team) {
    const dataFilter = Object.fromEntries(Object.entries(object).filter(([key, value]) => value));
    return dataFilter;
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

  private validInput(registrationFormData: any): boolean {
    const { students, team, advisor } = registrationFormData;

    if (!students || !team || !advisor) return false;

    // Validate team

    for (let key in team) {
      if (key === 'amount' && +team[key] !== 2 && +team[key] !== 3) return false;
      if (key === 'isComplete' && typeof (team[key]) !== 'boolean') return false;
      if (['school', 'name'].includes(key) && !this.validDefault(team[key])) return false;
    }

    // Validate advisor

    for (let key in advisor) {
      if (key === 'email' && !this.validEmail(advisor[key])) return false;
      else if (key === 'phoneNumber' && !this.validPhone(advisor[key])) return false;
      else if (key === 'prefixEn' && !this.validPrefixEn(advisor[key])) return false;
      else if (key === 'prefixTh' && !this.validPrefixTh(advisor[key])) return false;
      else {
        if (!this.validDefault(advisor[key])) return false;
      }
    }

    // Validate students
    if (students.length < 0 && students.length > 3) return false;

    for (let student of students) {
      for (let key in student) {
        if (key === 'email' && !this.validEmail(student[key])) return false;
        else if (key === 'phoneNumber' && !this.validPhone(student[key])) return false;
        else if (key === 'prefixEn' && !this.validPrefixEn(student[key])) return false;
        else if (key === 'prefixTh' && !this.validPrefixTh(student[key])) return false;
        else {
          if (!this.validDefault(student[key])) return false;
        }
      }
    }

    return true;
  }

  private validKey(registrationFormData: any): boolean {

    if (!registrationFormData) return false;

    for (let key in registrationFormData) {
      if (!['students', 'team', 'advisor'].includes(key)) return false;
    }

    const { students, team, advisor } = registrationFormData;

    if (team) {
      const teamKey = Object.keys(this.template.team);
      for (let key in team) {
        if (!teamKey.includes(key)) return false
      }
    }

    if (advisor) {
      const advisorKey = Object.keys(this.template.advisor);
      for (let key in advisor) {
        if (!advisorKey.includes(key)) return false
      }
    }

    if (!!students && Array.isArray(students) && students.length > 0) {

      if (students.length < 1 || students.length > 3) return false;
      const studentKey = Object.keys(this.template.students[0]);
      for (let i = 0; i < students.length; i++) {
        for (let key in students[i]) {
          if (!studentKey.includes(key)) return false;
        }
      }
    }

    return true;
  }

  public async getInputByEmail(email: string): Promise<RegistrationFormData | null> {
    const team = await this.teamRepository.getTeamByEmail(email);

    const teamFilter = this.filterNull(this.template.team);
    const adviFilter = this.filterNull(this.template.advisor);

    const studentsFilter: Partial<StudentFormData>[] = []
    for (let i = 0; i < this.template.students.length; i++) {
      studentsFilter.push(this.filterNull(this.template.students[i]));
    }

    const all: PartialRegisForm = {
      team: teamFilter,
      advisor: adviFilter,
      students: studentsFilter
    }

    //! Testing database with url http://localhost:3000/input/get

    console.log(all);

    console.log(this.validInput(all));

    const partialTeamData: Partial<Team> = { ...all.team };

    if(!partialTeamData.name || !partialTeamData.school) return null;

    const teamId = await this.saveTeamByEmail(email, partialTeamData)

    await this.saveStudents(teamId, all.students);

    //!


    if (!team) return null;

    const students = await this.participantRepository.getStudentsDataByTeamId(team.id);

    const advisor = await this.participantRepository.getAdvisorDataByTeamId(team.id);

    const studentsFormData: StudentFormData[] = [...students];

    const teamFormData: TeamFormData = { ...team, amount: students.length };

    let advisorFormData: AdvisorFormData;

    if (advisor) {
      advisorFormData = { ...advisor };
    }
    else {
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

    return { students: studentsFormData, team: teamFormData, advisor: advisorFormData };
  }

  public async saveInputByEmail(email: string, registrationFormData: RegistrationFormData): Promise<void> {

    const dataToSave: Partial<RegistrationFormData> = Object.fromEntries(Object.entries(registrationFormData).filter(([key, value]) => value));

    if (!this.validInput(registrationFormData)) return;

    const { students, team, advisor } = registrationFormData;

    const searchTeam = await this.teamRepository.getTeamByEmail(email);

  }

  private async saveTeamByEmail(email: string, team: Partial<TeamFormData>): Promise<number> {

    if (!!team.amount) {
      delete team.amount;
    }

    const dataToSave: Partial<Team> = { ...team };

    const searchTeam = await this.teamRepository.getTeamByEmail(email);

    if (searchTeam) {
      const updateTeam = await this.teamRepository.updateTeamByEmail(email, dataToSave);
      return updateTeam.id;
    }

    const createTeam = await this.teamRepository.createTeamByEmail(email, dataToSave);
    return createTeam.id;
  }

  private async saveAdvisorByTeamId(teamId: number, advisor: AdvisorFormData): Promise<void> {

    const dataToSave: Partial<Participant> = Object.fromEntries(Object.entries(advisor).filter(([key, value]) => value));

    const participant = await this.participantRepository.getAdvisorDataByTeamId(teamId);

    if (participant) await this.participantRepository.updateParticipantById(participant.id, dataToSave);
    else await this.participantRepository.createAdvisor(dataToSave, teamId);
  }

  private async saveStudents(teamId: number, students: Partial<StudentFormData>[]): Promise<void> {

    const participants = await this.participantRepository.getStudentsDataByTeamId(teamId);

    // Never have students in database
    if (participants.length === 0) {

      const dataStudents: Partial<Participant>[] = students.filter((dataStudent) => Object.keys(dataStudent).length !== 0);

      dataStudents.forEach((dataStudent) => dataStudent.teamId = teamId);

      return await this.participantRepository.createStudents(dataStudents);
    }

    

  }

}
