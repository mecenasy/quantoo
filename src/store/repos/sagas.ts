
import { call, fork, put, select, takeLatest } from 'redux-saga/effects';
import { getRepos } from '../../api/requests';
import { getReposSuccess, setReposList } from './actions';
import { ReposActionType, ReposAction, ResponseData, ListType, ReposListAction, Repo } from './constants';
import { AxiosResponse } from 'axios';
import { getRepoById } from './selectors';
import { getFromLocalStorage, saveInLocalStorage, removeFromLocalStorage } from '../helpers';

export function* reposWatcher() {
   yield takeLatest(ReposActionType.GetReposRequest, getReposWorker);
   yield takeLatest(ReposActionType.AddToReposList, addToReposListWorker);
   yield takeLatest(ReposActionType.RemoveFromReposList, removeFromReposListWorker);
   yield fork(initRepos);
}

function* getReposWorker(action: ReposAction) {
   if (action.type === ReposActionType.GetReposRequest) {
      if (!action.search) {
         return;
      }

      try {
         const { data }: AxiosResponse<ResponseData> = yield call(getRepos, action.search);

         const list: number[] = data.items.map(({ id }) => id);

         yield put(getReposSuccess(data.items));
         yield put(setReposList(ListType.Founded, list));
      } catch (error) {

      }
   }
}

function* addToReposListWorker(action: ReposListAction) {
   if (action.type === ReposActionType.AddToReposList && action.listType === ListType.Recorded) {
      const repo: Repo = yield select(getRepoById, action.item);
      let repos: Repo[] = yield call(getFromLocalStorage, ListType.Recorded);

      if (!repos) {
         repos = [];
      }

      if (!repos?.some((item) => item.id === action.item)) {
         repos.push(repo);

         yield call(saveInLocalStorage, ListType.Recorded, repos);
      }
   }

}
function* removeFromReposListWorker(action: ReposListAction) {
   if (action.type === ReposActionType.RemoveFromReposList && action.listType === ListType.Recorded) {
      let repos: Repo[] = yield call(getFromLocalStorage, ListType.Recorded);

      if (!repos) {
         repos = [];
      }
      const newRepos = repos.filter((item) => item.id !== action.item);

      if (newRepos.length) {
         yield call(saveInLocalStorage, ListType.Recorded, newRepos);
      } else {
         yield call(removeFromLocalStorage, ListType.Recorded);
      }
   }
}

function* initRepos () {
   let repos: Repo[] = yield call(getFromLocalStorage, ListType.Recorded);

   if (repos?.length) {
      const list: number[] = repos?.map(({ id }) => id);

      yield put(getReposSuccess(repos ?? []));
      yield put(setReposList(ListType.Recorded, list));
   }
}