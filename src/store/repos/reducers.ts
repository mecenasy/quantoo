import { ReposListAction, ReposListState, initialReposListState, ReposState, ReposAction, ReposActionType } from './constants';

export const reposListReducer = (state: ReposListState = initialReposListState, action: ReposListAction): ReposListState => {
   switch (action.type) {
      case ReposActionType.SetReposList: {
         const newState = { ...state };
         newState[action.listType] = action.list;
         return newState;
      }
      case ReposActionType.AddToReposList: {
         if (!state[action.listType].includes(action.item)) {

            const newState = {
               ...state,
               [action.listType]: [...state[action.listType], action.item],
            };
            return newState;
         }
         return state;
      }
      case ReposActionType.RemoveFromReposList: {
         const newState = {
            ...state,
            [action.listType]: state[action.listType].filter((item) => item !== action.item),
         };
         return newState;
      }
      default:
         return state;
   }
}

export const reposReducer = (state: ReposState = {}, action: ReposAction): ReposState => {
   switch (action.type) {
      case ReposActionType.GetReposSuccess: {
         const newState = { ...state };

         action.repos.forEach((repo) => {
            newState[repo.id] = repo
         });

         return newState;
      }
      default:
         return state;
   }
}