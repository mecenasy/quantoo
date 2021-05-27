import React, { FC, useCallback, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store/constants';
import { ListType, Repo } from '../../store/repos/constants';
import { getRepoById } from '../../store/repos/selectors';
import { AddCommentContext } from '../AddComment/AddCommentContext';
import * as P from './Parts';
import { RepoContext } from './RepoContext';
import { RepoItemProps } from './types';
import CommentsList from '../CommentItem/CommentsList';

const RepoItem: FC<RepoItemProps> = ({
   repoId,
}) => {
   const { full_name, owner } = useSelector<ApplicationState, Repo>(
      (state) => getRepoById(state, repoId)
   );

   const { onRemoveRepoFactory, onSaveRepoFactory, listType } = useContext(RepoContext)
   const { onOpenAddCommentModal } = useContext(AddCommentContext);

   const onClick = useCallback(() => {
      if (listType === ListType.Founded) {
         onSaveRepoFactory?.(repoId);
      } else {
         onRemoveRepoFactory?.(repoId);
      }
   }, [listType, onRemoveRepoFactory, onSaveRepoFactory, repoId]);

   const onOpenModal = useCallback(() => {
      if (listType === ListType.Recorded) {
         onOpenAddCommentModal(repoId);
      }
   }, [listType, onOpenAddCommentModal, repoId]);

   return (
      <P.Wrapper>
         <div>
            <div>
               {full_name}
            </div>
            <P.RepoAuthor>
               {owner.login}
            </P.RepoAuthor>
         </div>
         <div>
            <P.Button onClick={onClick}>
               {listType === ListType.Founded ? 'Zapisz' : 'Usuń z zapisanych'}
            </P.Button>
            {listType === ListType.Recorded && (
               <P.Button onClick={onOpenModal}>
                  Dodaj komentarz
               </P.Button>)}
         </div>
         <CommentsList repoId={repoId} />
      </P.Wrapper>
   )
};

export default RepoItem;
