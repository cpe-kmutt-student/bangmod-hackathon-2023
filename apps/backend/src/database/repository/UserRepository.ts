import { PrismaClient } from '@prisma/client';

export class UserRepository {

  private readonly database: PrismaClient;

  public constructor(database: PrismaClient) {
    this.database = database;
  }

  public async getFullNameEn(id: number): Promise<String> {
    const participant = await this.database.participant.findFirst({
      where: { id: id }
    });
    let fullName = `${participant?.firstnameEn}`;
    if(!!participant?.middleNameEn) fullName += ` ${participant?.middleNameEn}`;
    fullName += ` ${participant?.surnameEn}`;
    return fullName;
  }

  public async getFullNameTh(id: number): Promise<String> {
    const participant = await this.database.participant.findFirst({
      where: { id: id }
    });
    let fullName = `${participant?.firstnameTh}`;
    if(!!participant?.middleNameTh) fullName += ` ${participant?.middleNameTh}`;
    fullName += ` ${participant?.surnameTh}`;
    return fullName;
  }
  
};
