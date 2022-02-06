import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];

  constructor
  (
    private http: HttpClient,
  ) { }

  getPokemons(url: string = `${environment.apiUrl}pokemon`): Observable<any> {
    this.resetPokemons();
    let urlEndPoint = url;
    return this.http.get(urlEndPoint);
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  returnPokemons(): Pokemon[] {
    let pokes = this.pokemons.sort((a, b) => a.id - b.id);
    return pokes;
  }

  resetPokemons(): void {
    this.pokemons = [];
  }

  searchPokemon(content: string): Observable<any> {
    this.resetPokemons();
    let urlEndPoint = `${environment.apiUrl}pokemon/${content}`;
    return this.http.get(urlEndPoint);
  }
}
