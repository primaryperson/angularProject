import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'environments/environment';
import { StateUser, userReducer } from './user/user.reducer';


export interface State {
    user: StateUser;
}

export const reducers: ActionReducerMap<State> = {
    user: userReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
