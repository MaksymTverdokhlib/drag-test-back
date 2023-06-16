import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Box_parameters, Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async box(): Promise<Box_parameters | []> {
    const users = await this.prisma.box_parameters.findMany();

    const sortedUsers = users.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      return 1;
    });

    if (users.length === 0) {
      return [];
    } else {
      return sortedUsers[0];
    }
  }

  async createBox(
    data: Prisma.Box_parametersCreateInput,
  ): Promise<Box_parameters> {
    return this.prisma.box_parameters.create({
      data: {
        height: data.height,
        width: data.width,
        background: data.background,
        x: data.x,
        y: data.y,
      },
    });
  }

  async updateBoxParameters(data: Prisma.Box_parametersUpdateInput) {
    const users = await this.prisma.box_parameters.findMany();
    const sortedUsers = users.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      return 1;
    });

    return await this.prisma.box_parameters.update({
      data,
      where: {
        id: sortedUsers[0].id,
      },
    });
  }

  async updateBoxCoordinates(data: Prisma.Box_parametersUpdateInput) {
    const users = await this.prisma.box_parameters.findMany();

    const sortedUsers = users.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      }
      return 1;
    });

    return await this.prisma.box_parameters.update({
      data,
      where: {
        id: sortedUsers[0].id,
      },
    });
  }
}
