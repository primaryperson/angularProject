import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';
import { User } from './types';


export const userFeatureKey = 'user';

export interface StateUser {
    user: User | null;
}

export const initialState: StateUser = {
    user: null
};


export const userReducer = createReducer(
  initialState,
  on(userActions.attemptAuth, (state) => {
      return {
          ...state,
          user: {
              id: 1
          }
      };
  })
);
