import { createAction, props } from "@ngrx/store";
import { Pokemon } from "src/app/interfaces/pokemon";

export const AddPokemonAction = createAction(
  '[POKEMON] Add Item',
  props<{ payload: Pokemon }>()
);
