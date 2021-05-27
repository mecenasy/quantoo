import { CommentAction, CommentActionType, CommentsState } from "./constants"

export const addCommentToRepo = (repoId: number, author: string, comment: string): CommentAction => ({
   type: CommentActionType.AddCommentToRepo,
   repoId,
   author,
   comment
});

export const getCommentsFromLocalStorage = (comments: CommentsState): CommentAction => ({
   type: CommentActionType.GetCommentsFromLocalStorage,
   comments,
})