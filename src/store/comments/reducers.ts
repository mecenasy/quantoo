import { v4 } from 'uuid'
import { CommentAction, CommentActionType, CommentsState } from './constants';
export const commentsReducer = (state: CommentsState = {}, action: CommentAction): CommentsState => {
   switch (action.type) {
      case CommentActionType.AddCommentToRepo: {
         const newState = { ...state };
         if (!newState[action.repoId]) {
            newState[action.repoId] = [];
         }

         newState[action.repoId].push({
            id: v4(),
            author: action.author,
            comment: action.comment
         });

         return newState;
      }
      case CommentActionType.GetCommentsFromLocalStorage: {
         return action.comments;
      }
      default:
         return state;
   }
}
