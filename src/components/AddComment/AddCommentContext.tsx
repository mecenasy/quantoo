import React, { createContext, FC, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentToRepo } from "../../store/comments/actions";
import { FormData } from "./types";

interface AddCommentContextProps {
   show: boolean;
   onSubmit: (data: FormData) => void;
   onOpenAddCommentModal: (repoId: number) => void;
}

export const AddCommentContext = createContext<AddCommentContextProps>({
   show: false,
   onSubmit: () => { },
   onOpenAddCommentModal: () => { }
})

export const AddCommentProvider: FC = ({
   children
}) => {
   const dispatch = useDispatch();
   const [show, setShow] = useState(false);
   const [repoId, setRepoId] = useState(0);
   const onOpenAddCommentModal = useCallback((repoId: number) => {
      setRepoId(repoId);
      setShow(true);
   }, []);

   const onSubmit = useCallback(({ author, comment }: FormData) => {
      dispatch(addCommentToRepo(repoId, author, comment));
      setShow(false);
   }, [dispatch, repoId])



   return (
      <AddCommentContext.Provider value={{ show, onSubmit, onOpenAddCommentModal }} >
         {children}
      </AddCommentContext.Provider>
   )
}