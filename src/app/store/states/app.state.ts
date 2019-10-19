import { IConfigState, initialConfigState } from "./config.state";
import { IUserState, initialUserState } from "./user.state";
import { RouterReducerState } from "@ngrx/router-store";

export interface IAppState {
  users: IUserState;
  config: IConfigState;
  router?: RouterReducerState;
}

export const initialAppState = {
  users: initialUserState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
    return initialAppState;
}