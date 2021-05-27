import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Comment } from '../../store/comments/constants';
import { getCommentsByRepoId } from '../../store/comments/selectors';
import { ApplicationState } from '../../store/constants';
import { RepoItemProps } from '../RepoItem/types';
import CommentItem from './CommentItem';
import * as P from './Parts';

const CommentsList: FC<RepoItemProps> = ({
   repoId,
}) => {
   const comments = useSelector<ApplicationState, Comment[]>(
      (state) => getCommentsByRepoId(state, repoId)
   );

   if (!comments?.length) {
      return null
   }
   return (
      <P.CommentsWrapper>
         {comments.map(({ author, comment, id }) => (
            <CommentItem
               key={id}
               author={author}
               comment={comment}
            />
         ))}
      </P.CommentsWrapper>
   )
};

export default CommentsList;
