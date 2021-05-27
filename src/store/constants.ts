import { CommentsState } from "./comments/constants";
import { ReposListState, ReposState } from "./repos/constants";

export interface ApplicationState {
   reposList: ReposListState;
   repos: ReposState;
   comments: CommentsState;
}

export type ApplicationAction =any;