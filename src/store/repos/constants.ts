
export enum ListType {
   Founded = 'founded',
   Recorded = 'recorded',
}

export type ReposListState = Record<ListType, number[]>;
export type ReposState = Record<number, Repo>;

export enum ReposActionType {
   GetReposRequest = 'GET_REPOS_REQUEST',
   GetReposSuccess = 'GET_REPOS_SUCCESS',
   GetReposFail = 'GET_REPOS_FAIL',
   SetReposList = 'SET_REPOS_LIST',
   AddToReposList = 'ADD_TO_REPPOS_LIST',
   RemoveFromReposList = 'REMOVE_FROM_REPOS_LIST',
}


export type ReposListAction = {
   listType: ListType;
} & ({
   type: ReposActionType.SetReposList,
   list: number[];
} | {
   type: ReposActionType.AddToReposList,
   item: number;
} | {
   type: ReposActionType.RemoveFromReposList,
   item: number;
});

export type ReposAction = {
   type: ReposActionType.GetReposRequest,
   search: string;
} | {
   type: ReposActionType.GetReposSuccess;
   repos: Repo[];
} | {
   type: ReposActionType.GetReposFail;
   error: any;
}

export const initialReposListState = {
   [ListType.Founded]: [],
   [ListType.Recorded]: [],
}

export interface ResponseData{
   total_count: number,
   incomplete_results: boolean,
   items: Repo[];
}

export interface Repo {
   id: number,
   full_name: string
   language: string,
   created_at: string,
   owner: {
      login: string,
      avatar_url: string,
      url: string
   }
}
