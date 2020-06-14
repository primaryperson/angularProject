import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from './user.actions';
import { User } from './types';
import { TokenData } from 'app/auth/graphql/types';


export const userFeatureKey = 'user';

export interface StateUser {
    user?: User;
    tokenData?: TokenData
}

export const initialState: StateUser = {
    user: null,
    tokenData: null
};


export const userReducer = createReducer(
    initialState,
    on(userActions.authSuccess, (state, { tokenData }) => ({
        ...state,
        tokenData,
    }))
    // on(userActions.attemptAuth, (state) => {
    //     return {
    //         ...state,
    //         user: {
    //             id: 1
    //         },
    //     };
    // })
);
