
import { call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { getFromLocalStorage, saveInLocalStorage } from '../helpers';
import { getCommentsFromLocalStorage } from './actions';
import { CommentAction, CommentActionType, commentKey, CommentsState } from './constants';
import { getComments } from './selectors';

export function* commentsWatcher() {
   yield takeLatest(CommentActionType.AddCommentToRepo, saveCommentsInLocalStorage);
   yield fork(initComments);
}

function* saveCommentsInLocalStorage(action: CommentAction) {
   if (action.type === CommentActionType.AddCommentToRepo) {
      const comments: CommentsState = yield select(getComments);

      yield call(saveInLocalStorage, commentKey, comments);
   }
}

function* initComments() {
   let comments: CommentsState = yield call(getFromLocalStorage, commentKey);

   yield put(getCommentsFromLocalStorage(comments));
}