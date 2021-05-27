export interface Comment {
   id: string;
   author: string,
   comment: string,
}
export type CommentsState = Record<number, Comment[]>;

export enum CommentActionType {
   AddCommentToRepo = 'ADD_COMMENT_TO_REPO',
   GetCommentsFromLocalStorage = 'GET_COMMENTS_FROM_LOCAL_STORAGE'
}

export type CommentAction = {
   type: CommentActionType.AddCommentToRepo,
   repoId: number;
   author: string;
   comment: string;
} | {
   type: CommentActionType.GetCommentsFromLocalStorage,
   comments: CommentsState;
};

export const commentKey = 'comments'