import { ListType, ReposListAction, ReposActionType, ReposAction, Repo } from "./constants"

export const setReposList = (listType: ListType, list: number[]): ReposListAction => ({
   type: ReposActionType.SetReposList,
   listType,
   list,
});

export const addToReposList = (listType: ListType, item: number): ReposListAction => ({
   type: ReposActionType.AddToReposList,
   listType,
   item,
});

export const removeFromReposList = (listType: ListType, item: number): ReposListAction => ({
   type: ReposActionType.RemoveFromReposList,
   listType,
   item,
});

export const getReposRequest = (search: string): ReposAction => ({
   type: ReposActionType.GetReposRequest,
   search,
});

export const getReposSuccess = (repos: Repo[]): ReposAction => ({
   type: ReposActionType.GetReposSuccess,
   repos,
});

export const getReposFail = (error: any): ReposAction => ({
   type: ReposActionType.GetReposFail,
   error,
});