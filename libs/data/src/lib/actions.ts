import { createAction, props } from '@ngrx/store';
// import { Pet } from '@workspace/api-interfaces';

export const fetchPets = createAction(
  '[Data Actions] fetch pets',
);

export const fetchPetsSuccess = createAction(
  '[Data Actions] fetch pets success',
);

export const fetchPetsError = createAction(
  '[Data Actions] fetch pets error',
);
