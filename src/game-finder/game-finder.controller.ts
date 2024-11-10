import { Controller, Get } from '@nestjs/common';
import { GameFinderService } from './game-finder.service';

@Controller('freegames')
export class GameFinderController {
  constructor(private readonly gameFinderService: GameFinderService) {}

  @Get()
  findFreeGames(){
    return this.gameFinderService.searchFreeGamesEpic();
  }
}
