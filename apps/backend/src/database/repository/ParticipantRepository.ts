import { Participant, PrismaClient } from '@prisma/client';

export class ParticipantRepository {

  private readonly database: PrismaClient;

  public constructor(database: PrismaClient) {
    this.database = database;
  }

  public async createStudent(data: Partial<Participant>, teamId: number): Promise<void> {

    const student = await this.database.participant.create({
      data: {
        ...data,
        teamId: teamId,
      }
    });
  }

  public async createAdvisor(data: Partial<Participant>, teamId: number, ): Promise<void> {
    await this.database.participant.create({
      data: {
        ...data,
        isAdvisor: true,
        teamId
      }
    });
  }

  public async createEmptyParticipants(teamId: number) {
    await this.database.participant.create({
      data: {
        isAdvisor: true,
        teamId
      }
    });

    await this.database.participant.createMany({
      data: [
        { isAdvisor: false, teamId },
        { isAdvisor: false, teamId },
        { isAdvisor: false, teamId }
      ]
    });
  }

  public async createStudents(data: Partial<Participant>[]): Promise<void> {
    await this.database.participant.createMany({
      data: data
    });
  }

  public async getParticipantsByTeamId(id: number) {
    return this.database.participant.findMany({
      where: { teamId: id }
    });
  }

  public async getStudentsDataByTeamId(id: number): Promise<Participant[]> {
    return this.database.participant.findMany({
      where: { teamId: id, isAdvisor: false },
      orderBy: { id: 'asc' }
    });
  }

  public async getAdvisorDataByTeamId(id: number): Promise<Participant | null> {
    return this.database.participant.findFirst({
      where: { teamId: id, isAdvisor: true }
    });
  }

  public async getStudentsDataIntoFormByTeamId(id: number) {
    return this.database.participant.findMany({
      where: { teamId: id, isAdvisor: false },
      select: {
        disease: true,
        drugAllergy: true,
        email: true,
        firstnameEn: true,
        firstnameTh: true,
        foodAllergy: true,
        foodType: true,
        grade: true,
        lineId: true,
        middleNameEn: true,
        middleNameTh: true,
        nickname: true,
        phoneNumber: true,
        prefixEn: true,
        prefixTh: true,
        quote: true,
        surnameEn: true,
        surnameTh: true,
      }
    });
  }

  public async getAdvisorDataIntoFormByTeamId(id: number) {
    return this.database.participant.findFirst({
      where: { teamId: id, isAdvisor: true },
      select: {
        email: true,
        firstnameEn: true,
        firstnameTh: true,
        lineId: true,
        middleNameEn: true,
        middleNameTh: true,
        phoneNumber: true,
        prefixEn: true,
        prefixTh: true,
        surnameEn: true,
        surnameTh: true,
      }
    });
  }

  public async setStudentDataToNullById(id: number) {
    await this.database.participant.update({
      where: { id: id },
      data: {
        disease: null,
        drugAllergy: null,
        email: null,
        firstnameEn: null,
        firstnameTh: null,
        foodAllergy: null,
        foodType: null,
        grade: null,
        isAdvisor: false,
        lineId: null,
        middleNameEn: null,
        middleNameTh: null,
        nickname: null,
        phoneNumber: null,
        prefixEn: null,
        prefixTh: null,
        quote: null,
        surnameEn: null,
        surnameTh: null,
      }
    });
  }

  public async updateParticipantById(id: number, data: Partial<Participant>): Promise<void> {
    await this.database.participant.update({
      where: { id: id },
      data: data
    });
  }

  public async deleteParticipantById(id: number): Promise<void> {
    await this.database.participant.delete({
      where: { id: id }
    });
  }
}
