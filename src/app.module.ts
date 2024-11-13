import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameFinderModule } from './game-finder/game-finder.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),ScheduleModule.forRoot(),GameFinderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
