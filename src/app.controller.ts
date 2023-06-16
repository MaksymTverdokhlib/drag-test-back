import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/box/parameters')
  getBox() {
    return this.appService.box();
  }

  @Post('/box/create')
  async createBox(
    @Body()
    boxData: {
      x: number;
      y: number;
      width: number;
      height: number;
      background: string;
    },
  ) {
    return this.appService.createBox(boxData);
  }

  @Patch('/box/parameters')
  async updateBoxParameters(
    @Body()
    boxData: {
      width: number;
      height: number;
      background: string;
    },
  ) {
    return this.appService.updateBoxParameters(boxData);
  }

  @Patch('/box/coordinates')
  async updateBoxCoordinates(
    @Body()
    boxData: {
      x: number;
      y: number;
    },
  ) {
    return this.appService.updateBoxCoordinates({
      x: Math.round(boxData.x),
      y: Math.round(boxData.y),
    });
  }
}
