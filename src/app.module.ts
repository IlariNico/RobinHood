import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameFinderModule } from './game-finder/game-finder.module';

@Module({
  imports: [GameFinderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
