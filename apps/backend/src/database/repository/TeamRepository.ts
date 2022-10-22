import { PrismaClient, Team } from '@prisma/client';

export class TeamRepository {

  private readonly database: PrismaClient;

  public constructor(database: PrismaClient) {
    this.database = database;
  }

  public async createEmptyTeam(email: string) {
    return this.database.team.create({
      data: { email }
    });
  }

  public async createTeamByEmail(email: string, data: Partial<Team>): Promise<Team> {
    return this.database.team.create({
      data: {
        email,
        ... data
      }
    });
  }

  public async getTeamById(id: number): Promise<Team | null> {
    return this.database.team.findUnique({
      where: { id: id }
    });
  }

  public async getTeamByEmail(email: string): Promise<Team | null> {
    return this.database.team.findUnique({
      where: { email: email }
    });
  }

  public async getTeamIntoFormByEmail(email: string) {
    return this.database.team.findUnique({
      where: { email: email },
      select: {
        isComplete: true,
        name: true,
        school: true,
      }
    });
  }

  public async updateTeamById(id: number, data: Partial<Team>): Promise<Team> {
    return this.database.team.update({
      where: { id: id },
      data: data
    });
  }

  public async updateTeamByEmail(email: string, data: Partial<Team>): Promise<Team> {
    return this.database.team.update({
      where: { email: email },
      data: data
    });
  }

  public async deleteTeamById(id: number): Promise<void> {
    await this.database.team.delete({
      where: { id: id }
    });
  }
}
