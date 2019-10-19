import { IUserState, initialUserState } from "../states/user.state";
import { UserActions, EUserActions } from "../actions/user.action";

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
    switch(action.type){
        case EUserActions.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload
            }
        }
        default: return state;
    }
};
