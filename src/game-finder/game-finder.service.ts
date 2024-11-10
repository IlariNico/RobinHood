import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GameFinderService {
    
    async searchFreeGamesEpic(){
        const data= (await axios.get(process.env.EPIC_FREE_URL)).data
        const allGames=data.data.Catalog.searchStore.elements
        let freeGames= allGames.filter((game)=>{ 
            return (game.price.totalPrice.originalPrice>0 && game.price.totalPrice.discountPrice==0)
        })
        
        freeGames=freeGames.map(game=>{
            return {
                title:game.title,
                description:game.description,
                image:game.keyImages[2].url,
                platform:'Epic Games',
                url:'https://store.epicgames.com/es-ES/p/'+game.urlSlug
            }
        })
        console.log(freeGames)
        try {
            axios.post(process.env.DISCORD_BOT_URL,freeGames)
        } catch (error) {
            console.log("error enviando juegos a discord "+error)
        }
        
        
    }
}
