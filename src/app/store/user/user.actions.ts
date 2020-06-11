import { createAction, props } from '@ngrx/store';
import { SocialMediaName } from './types';

export const attemptAuth = createAction(
  '[User] Attempt Auth User',
  props<{ socialName: SocialMediaName, socialAccessToken: string }>()
);
