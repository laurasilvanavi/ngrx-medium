import { Action } from '@ngrx/store';
import { IUser } from 'src/app/models';

export enum EUserActions {
    GetUsers = '[Users] Get Users',
    GetUsersSuccess = '[Users] Get Users Success',
    GetUser = '[Users] Get User',
    GetUserSuccess = '[Users] Get User Success',
}

export class GetUsers implements Action {
    public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
    public readonly type = EUserActions.GetUsersSuccess;
    constructor(public payload: IUser[]){} //TODO: what is the diff between success and not succes, why here it is needed to pass interface? due to effects - they will call successes after get data?
}

export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;
    constructor(public payload: number){}
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserSuccess;
    constructor(public payload: IUser){}
}

export type UserActions = GetUsers | GetUsersSuccess | GetUser | GetUserSuccess;