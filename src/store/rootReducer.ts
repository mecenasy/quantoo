
import { combineReducers, Reducer } from 'redux';
import { commentsReducer } from './comments/reducers';
import { ApplicationState, ApplicationAction } from './constants';
import { reposListReducer, reposReducer } from './repos/reducers';


export const rootReducer: Reducer<ApplicationState, ApplicationAction> = combineReducers({
   reposList: reposListReducer,
   repos: reposReducer,
   comments: commentsReducer,
});