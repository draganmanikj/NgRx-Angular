import { createAction, props } from "@ngrx/store";

export const init = createAction(
    '[Counter] Init'
);

export const set = createAction(
    '[Counter] Set',
    props<{value: number}>()
)

export const incremenet = createAction(
    '[Counter] Incremenet',
    props<{value: number}>()
);

export const decrement = createAction(
    '[Counter] Decrement',
    props<{value: number}>()
)