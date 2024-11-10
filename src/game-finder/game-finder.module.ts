import { Module } from '@nestjs/common';
import { GameFinderService } from './game-finder.service';
import { GameFinderController } from './game-finder.controller';

@Module({
  controllers: [GameFinderController],
  providers: [GameFinderService],
})
export class GameFinderModule {}
