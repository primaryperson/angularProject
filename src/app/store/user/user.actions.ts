import { createAction, props } from '@ngrx/store';
import { SocialMediaName, User } from './types';
import { TokenData } from 'app/auth/graphql/types';

export const attemptAuth = createAction(
  '[User] Attempt Auth User',
  props<{ socialName: SocialMediaName, socialAccessToken: string }>()
);

export const authSuccess = createAction(
  '[User] Auth Success',
  props<{ tokenData: TokenData }>()
);