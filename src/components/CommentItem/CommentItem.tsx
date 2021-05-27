import React, { FC } from 'react';
import * as P from './Parts';

interface CommentProps {
   author: string;
   comment: string
}

const CommentItem: FC<CommentProps> = ({
   author,
   comment,
}) => (
   <P.CommentWrapper >
      <P.Author>{author}</P.Author>
      <P.Comment>{comment}</P.Comment>
   </P.CommentWrapper>
);

export default CommentItem;
