import { Store, createStore, applyMiddleware, StoreEnhancer, compose } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { rootReducer } from './rootReducer';
import { ApplicationState, ApplicationAction } from './constants';
import { rootSaga } from './rootSaga';

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const windowIfDefined = typeof window === 'undefined'
   ? null
   : window as Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: (a: any) => any };

const composeEnhancers = (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware: StoreEnhancer = applyMiddleware(sagaMiddleware);

const composedMiddlewares = composeEnhancers(middleware as any);

export const store: Store<ApplicationState, ApplicationAction> = createStore(rootReducer, undefined, composedMiddlewares);

sagaMiddleware.run(rootSaga);