import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Box_parameters, Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async box(): Promise<Box_parameters | 'No data'> {
    const user = await this.prisma.box_parameters.findFirst({
      orderBy: {
        id: 'asc',
      },
    });

    if (!user) {
      return 'No data';
    } else {
      return user;
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
    const firstUser = await this.prisma.box_parameters.findFirst({
      orderBy: {
        id: 'asc',
      },
    });

    return await this.prisma.box_parameters.update({
      data,
      where: {
        id: firstUser.id,
      },
    });
  }
}
