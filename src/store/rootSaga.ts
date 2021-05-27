
import { all, fork } from 'redux-saga/effects';
import { commentsWatcher } from './comments/sagas';
import { reposWatcher } from './repos/sagas';


export function* rootSaga() {
   yield all([
      fork(reposWatcher),
      fork(commentsWatcher),
   ]);
}