import React, { createContext, FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToReposList, removeFromReposList } from "../../store/repos/actions";
import { ListType } from "../../store/repos/constants";

interface RepoContextProps {
   listType: ListType;
   onSaveRepoFactory: (id: number) => void;
   onRemoveRepoFactory: (id: number) => void;
}

export const RepoContext = createContext<RepoContextProps>({
   listType: ListType.Founded,
   onSaveRepoFactory: () => { },
   onRemoveRepoFactory: () => { },
})

export const RepoProvider: FC<{ listType: ListType }> = ({
   listType,
   children
}) => {
   const dispatch = useDispatch();

   const onSaveRepoFactory = useCallback((id: number) => {
      dispatch(addToReposList(ListType.Recorded, id))
   }, [dispatch]);

   const onRemoveRepoFactory = useCallback((id: number) => {
      dispatch(removeFromReposList(ListType.Recorded, id))
   }, [dispatch]);

   return (
      <RepoContext.Provider value={{ listType, onSaveRepoFactory, onRemoveRepoFactory }} >
         {children}
      </RepoContext.Provider>
   )
}