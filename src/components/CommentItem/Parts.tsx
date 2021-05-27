import styled from 'styled-components';
import BorderBase from '../Border/Border';

export const CommentWrapper = styled.div`
   margin-bottom: 8px;
   border-bottom: 1px solid #cecece;

   &:last-child {
      margin: 0;
      border: none;
   }
`;

export const Author = styled.div`
   font-weight: 600;
   margin-bottom: 4px;
`;

export const Comment = styled.div`
   margin-bottom: 4px;
   font-size: 14px;
`;

export const CommentsWrapper = styled(BorderBase)`
   width: 100%;
   background: white;
   padding: 8px;
   margin-top: 8px;
`;
