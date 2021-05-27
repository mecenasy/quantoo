import { createSelector } from "reselect";
import { ApplicationState } from "../constants";
import { ListType, Repo, ReposListState, ReposState } from "./constants";

const getRepos = (state: ApplicationState): ReposState => state.repos;
const getReposLists = (state: ApplicationState): ReposListState => state.reposList;

export const getRepoById = createSelector<ApplicationState, number, ReposState, number, Repo>(
   getRepos,
   (_, id) => id,
   (repos, id) => repos[id],
)

export const getReposList = createSelector<ApplicationState, ListType, ReposListState, ListType, number[]>(
   getReposLists,
   (_, id) => id,
   (lists, id) => lists[id],
)