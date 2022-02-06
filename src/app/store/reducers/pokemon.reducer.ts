import { Action, createReducer, on } from '@ngrx/store';
import { Pokemon } from "src/app/interfaces/pokemon";
import { AddPokemonAction } from "src/app/store/actions/pokemon.actions";

const reducer = createReducer(
  [],
  on(AddPokemonAction, (state, action) => {
    return [...state, action.payload];
  })
);

export function PokemonReducer(state: Array<Pokemon> | undefined, action: Action) {
  return reducer(state, action);
}
