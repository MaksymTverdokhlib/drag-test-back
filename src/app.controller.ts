import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateBoxDto, UpdateBoxParametersDto } from './dto/box.dto';

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
    boxData: CreateBoxDto,
  ) {
    return this.appService.createBox(boxData);
  }

  @Patch('/box/parameters')
  async updateBoxParameters(
    @Body()
    boxData: UpdateBoxParametersDto,
  ) {
    return this.appService.updateBoxParameters(boxData);
  }
}
