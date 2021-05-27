import { createSelector } from "reselect";
import { ApplicationState } from "../constants";
import { Comment, CommentsState } from "./constants";

export const getComments = (state: ApplicationState): CommentsState => state.comments;

export const getCommentsByRepoId = createSelector<ApplicationState, number, CommentsState, number, Comment[]>(
   getComments,
   (_, id) => id,
   (comments, id) => comments[id],
)