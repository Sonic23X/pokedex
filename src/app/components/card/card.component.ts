import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemons: Pokemon[] = [];
  urlNext: string = '';
  urlBack: string = '';
  breakpoint: any = 3;
  content: string = '';

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    this.getPokemons();
  }

  onResize(event: any): void {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

  search(): void {
    this.pokemonService.searchPokemon(this.content.toLowerCase()).subscribe(pokemon => {
      let types: Array<any> = [];
      let typesPokemon: Array<any> = pokemon.types;

      typesPokemon.forEach(type => {
        types.push(type.type.name);
      });

      let pokeInfo: Pokemon = {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
        types: types,
        color: this.getColor(types[0])
      };
      this.pokemonService.addPokemon(pokeInfo);
      this.pokemons = this.pokemonService.returnPokemons();
      this.content = '';
    });
  }

  getPokemons(url: string = ''): void {
    if (url === '') {
      this.pokemonService.getPokemons().subscribe(value => {

        let pokemons: Array<any> = value.results;
        pokemons.forEach(pokemon => {
          this.pokemonService.searchPokemon(pokemon.name).subscribe(value => {
            let types: Array<any> = [];
            let typesPokemon: Array<any> = value.types;

            typesPokemon.forEach(type => {
              types.push(type.type.name);
            });

            let pokeInfo: Pokemon = {
              id: value.id,
              name: value.name,
              sprite: value.sprites.front_default,
              types: types,
              color: this.getColor(types[0])
            };
            this.pokemonService.addPokemon(pokeInfo);
          });
        });
        this.pokemons = this.pokemonService.returnPokemons();
        this.urlNext = value.next;
        this.urlBack = value.previous;
      });
    }
    else {
      this.pokemonService.getPokemons(url).subscribe(value => {

        let pokemons: Array<any> = value.results;
        pokemons.forEach(pokemon => {
          this.pokemonService.searchPokemon(pokemon.name).subscribe(value => {
            let types: Array<any> = [];
            let typesPokemon: Array<any> = value.types;

            typesPokemon.forEach(type => {
              types.push(type.type.name);
            });

            let pokeInfo: Pokemon = {
              id: value.id,
              name: value.name,
              sprite: value.sprites.front_default,
              types: types,
              color: this.getColor(types[0])
            };
            this.pokemonService.addPokemon(pokeInfo);
          });
        });
        this.pokemons = this.pokemonService.returnPokemons();
        this.urlNext = value.next;
        this.urlBack = value.previous;
      });
    }
  }

  getColor(type: string): any {
    const colours = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
    };

    if (type === 'normal')
      return colours.normal;
    if (type === 'fire')
      return colours.fire;
    if (type === 'water')
      return colours.water;
    if (type === 'electric')
      return colours.electric;
    if (type === 'grass')
      return colours.grass;
    if (type === 'ice')
      return colours.ice;
    if (type === 'fighting')
      return colours.fighting;
    if (type === 'poison')
      return colours.poison;
    if (type === 'ground')
      return colours.ground;
    if (type === 'flying')
      return colours.flying;
    if (type === 'psychic')
      return colours.psychic;
    if (type === 'bug')
      return colours.bug;
    if (type === 'rock')
      return colours.rock;
    if (type === 'ghost')
      return colours.ghost;
    if (type === 'dragon')
      return colours.dragon;
    if (type === 'dark')
      return colours.dark;
    if (type === 'steel')
      return colours.steel;
    if (type === 'fairy')
      return colours.fairy;
  }
}
