import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/v1/cosmos/:id/wallet')
  createWallet(@Param('id') id, @Body() body: any) {
    return this.appService.stakeTIA();
  }

  // @Get('/api/v1/cosmos/:id/wallet/balance')
  // getBalance(@Param('id') id, @Body() body: any) {
  //   return this.appService.getBalance();
  // }
}
