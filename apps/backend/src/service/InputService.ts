import { ParticipantRepository } from '@/database/repository/ParticipantRepository';
import { TeamRepository } from '@/database/repository/TeamRepository';
import { Participant, Team } from '@prisma/client';
import { AdvisorFormData, RegistrationFormData, StudentFormData, TeamFormData } from 'api-schema';

export class InputService {

  private readonly participantRepository: ParticipantRepository
  private readonly teamRepository: TeamRepository

  private readonly template: RegistrationFormData = {
    students: [
      {
        drugAllergy: "",
        quote: "",
        foodAllergy: "",
        email: "abc@mail.com",
        grade: "M5",
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
      {
        drugAllergy: "",
        quote: "",
        foodAllergy: "",
        email: "abc@mail.com",
        grade: "M5",
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
      }, {
        drugAllergy: "",
        quote: "",
        foodAllergy: "",
        email: "abc@mail.com",
        grade: "M5",
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
      amount: 3,
      school: "",
      name: "",
      isComplete: false
    },
    advisor: {
      email: "abc@mail.com",
      lineId: "",
      middleNameEn: "",
      middleNameTh: "",
      firstnameEn: "",
      firstnameTh: "",
      phoneNumber: "",
      prefixEn: "",
      prefixTh: "",
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

  private isNotNullAndNotEmpty(data: any): boolean {
    if (data && data !== "") return true;
    return false;
  }

  private validDefault(data: any): boolean {
    if (this.isNotNullAndNotEmpty(data) && typeof (data) !== "string") return false;
    return true;
  }

  private validEmail(data: any): boolean {
    const emailTest = /^[^@]+@\w+(\.\w+)+\w$/
    if (this.isNotNullAndNotEmpty(data) && (typeof (data) !== "string" || !emailTest.test(data))) return false;
    return true;
  }

  private validPrefixEn(data: any): boolean {
    if (this.isNotNullAndNotEmpty(data) && (typeof (data) !== "string" || !["Mr.", "Mrs.", "Miss."].includes(data))) return false;
    return true;
  }

  private validPrefixTh(data: any): boolean {
    if (this.isNotNullAndNotEmpty(data) && (typeof (data) !== "string" || !["นาย", "นางสาว", "นาง"].includes(data))) return false;
    return true;
  }

  private validPhone(data: any): boolean {
    if (this.isNotNullAndNotEmpty(data) && (typeof (data) !== "string" || data.length !== 10)) return false;
    return true;
  }

  private validInput(registrationFormData: any): boolean {
    const { students, team, advisor } = registrationFormData;
    if (!students || !team || !advisor) return false;

    // Validate team
    if (team.amount && +team.amount !== 0 && +team.amount !== 2 && +team.amount !== 3) return false;

    if (!this.validDefault(team.school)) return false;

    if (!this.validDefault(team.name)) return false;

    // Validate advisor

    if (!this.validEmail(advisor.email)) return false;

    if (!this.validDefault(advisor.lineId)) return false;

    if (!this.validDefault(advisor.middleNameEn)) return false;

    if (!this.validDefault(advisor.middleNameTh)) return false;

    if (!this.validDefault(advisor.firstnameEn)) return false;

    if (!this.validDefault(advisor.firstnameTh)) return false;

    if (!this.validPhone(advisor.phoneNumber)) return false;

    if (!this.validPrefixEn(advisor.prefixEn)) return false;

    if (!this.validPrefixTh(advisor.prefixTh)) return false;

    if (!this.validDefault(advisor.surnameEn)) return false;

    if (!this.validDefault(advisor.surnameTh)) return false;


    // Validate students
    if (students.length < 2 && students.length > 3) return false;

    for (let i = 0; i < students.length; i++) {
      if (!this.validDefault(students[i].drugAllergy)) return false;

      if (!this.validDefault(students[i].foodAllergy)) return false;

      if (!this.validDefault(students[i].quote)) return false;

      if (!this.validEmail(students[i].email)) return false;

      if (!this.validDefault(students[i].grade)) return false;

      if (!this.validDefault(students[i].lineId)) return false;

      if (!this.validDefault(students[i].disease)) return false;

      if (!this.validDefault(students[i].middleNameEn)) return false;

      if (!this.validDefault(students[i].middleNameTh)) return false;

      if (!this.validDefault(students[i].firstnameEn)) return false;

      if (!this.validDefault(students[i].firstnameTh)) return false;

      if (!this.validDefault(students[i].nickname)) return false;

      if (!this.validPhone(students[i].phoneNumber)) return false;

      if (!this.validDefault(students[i].foodType)) return false;

      if (!this.validPrefixEn(students[i].prefixEn)) return false;

      if (!this.validPrefixTh(students[i].prefixTh)) return false;

      if (!this.validDefault(students[i].surnameEn)) return false;

      if (!this.validDefault(students[i].surnameTh)) return false;
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
    console.log(this.validInput(this.template));
    if (!team) return null;

    const students = await this.participantRepository.getStudentsDataByTeamId(team.id);

    const advisor = await this.participantRepository.getAdvisorDataByTeamId(team.id);

    const studentsFormData: StudentFormData[] = [...students]; //TODO : Why isAdvisor in Participant can contain in StudentFormData.

    const teamFormData: TeamFormData = {...team, amount: students.length};
    
    const advisorFormData: AdvisorFormData = {
      lineId: advisor?.lineId || null,
      email: advisor?.email || null,
      middleNameEn: advisor?.middleNameEn || null,
      middleNameTh: advisor?.middleNameTh || null,
      firstnameEn: advisor?.firstnameEn || null,
      firstnameTh: advisor?.firstnameTh || null,
      phoneNumber: advisor?.phoneNumber || null,
      prefixEn: advisor?.prefixEn || null,
      prefixTh: advisor?.prefixTh || null,
      surnameEn: advisor?.surnameEn || null,
      surnameTh: advisor?.surnameTh || null,
    }

    return { students: studentsFormData, team: teamFormData, advisor: advisorFormData };
  }

  public async saveInputByEmail(email: string, registrationFormData: RegistrationFormData): Promise<void> {
    if (!this.validInput(registrationFormData)) return;

    const { students, team } = registrationFormData;

  }

  private async saveTeamByEmail(email: string, team: TeamFormData): Promise<void> {
    const dataToSave: Partial<Team> = {};

    if (team.name) dataToSave.name = team.name;
    if (team.school) dataToSave.school = team.school;
    if (team.isComplete !== null) dataToSave.isComplete = team.isComplete;

    const searchTeam = await this.teamRepository.getTeamByEmail(email);

    if (searchTeam) await this.teamRepository.updateTeamByEmail(email, dataToSave);
    else await this.teamRepository.createTeamByEmail(email, dataToSave);
  }

  private async saveAdvisorByTeamId(teamId: number, advisor: AdvisorFormData): Promise<void> {
    // const dataToSave: Partial<Participant> = {};

    // if (advisor.prefixTh) dataToSave.prefixTh = advisor.prefixTh;
    // if (advisor.firstnameTh) dataToSave.firstnameTh = advisor.firstnameTh;
    // if (advisor.middleNameTh) dataToSave.middleNameTh = advisor.surnameTh;
    // if (advisor.surnameTh) dataToSave.surnameTh = advisor.surnameTh;
    // if (advisor.prefixEn) dataToSave.prefixEn = advisor.prefixEn;
    // if (advisor.firstnameEn) dataToSave.firstnameEn = advisor.firstnameEn;
    // if (advisor.middleNameEn) dataToSave.middleNameEn = advisor.middleNameEn;
    // if (advisor.surnameEn) dataToSave.surnameEn = advisor.surnameEn;
    // if (advisor.email) dataToSave.email = advisor.email;
    // if (advisor.phoneNumber) dataToSave.phoneNumber = advisor.phoneNumber;
    // if (advisor.lineId) dataToSave.lineId = advisor.lineId;
    // dataToSave.isAdvisor = true;

    const dataToSave: Partial<Participant> = Object.fromEntries(Object.entries(advisor).filter(([key, value]) => value));

    const participant = await this.participantRepository.getAdvisorDataByTeamId(teamId);

    if (participant) await this.participantRepository.updateParticipantById(participant.id, dataToSave);
    else await this.participantRepository.createAdvisor(dataToSave, teamId);
  }

  private async saveStudents(teamId: number, students: StudentFormData[]): Promise<void> {

    const participants = await this.participantRepository.getStudentsDataByTeamId(teamId);

    for(let i=0; i<students.length; i++) {
      const dataToSave: Partial<Participant> = Object.fromEntries(Object.entries(students[i]).filter(([key, value]) => value));

      
    }
    // for (let i = 0; i < students.length; i++) {
    //   const dataToSave: Partial<Participant> = {};
    //   const infoToSave: Partial<ParticipantInformation> = {};
    //   const student = students[i];

    //   if (student.prefixTh) dataToSave.prefixTh = student.prefixTh;
    //   if (student.firstnameTh) dataToSave.firstnameTh = student.firstnameTh;
    //   if (student.middleNameTh) dataToSave.middleNameTh = student.middleNameTh;
    //   if (student.surnameTh) dataToSave.surnameTh = student.surnameTh;
    //   if (student.prefixEn) dataToSave.prefixEn = student.prefixEn;
    //   if (student.firstnameEn) dataToSave.firstnameEn = student.firstnameEn;
    //   if (student.middleNameEn) dataToSave.middleNameEn = student.middleNameEn;
    //   if (student.surnameEn) dataToSave.surnameEn = student.surnameEn;
    //   if (student.email) dataToSave.email = student.email;
    //   if (student.phoneNumber) dataToSave.phoneNumber = student.phoneNumber;
    //   if (student.lineId) dataToSave.lineId = student.lineId;

    //   if (student.nickname) infoToSave.nickname = student.nickname;
    //   if (student.grade) infoToSave.grade = student.grade;
    //   if (student.quote) infoToSave.quote = student.quote;
    //   if (student.foodType) infoToSave.foodType = student.foodType;
    //   if (student.foodAllergy) infoToSave.foodAllergy = student.foodAllergy;
    //   if (student.drugAllergy) infoToSave.drugAllergy = student.drugAllergy;
    //   if (student.disease) infoToSave.disease = student.disease;

    // }

  }

}
