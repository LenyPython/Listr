import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthStateInterface } from './auth.types';

export const AUTH_REDUCER_KEY = 'AUTH_REDUCER_KEY';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>(AUTH_REDUCER_KEY);

export const isRegSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isRegisterSubmitting
);

export const isLoginSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoginSubmitting
);
