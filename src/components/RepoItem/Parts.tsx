import styled from 'styled-components';
import BorderBase from '../Border/Border';

export const SubTitle = styled.h2`
   font-size: 18px;
`;

export const Border = styled(BorderBase)`
   padding: 12px;
   margin: 16px 0 32px;
   max-height: 504px;
   overflow-y: auto;

   &:last-child {
      margin-bottom: 0;
   }
`;

export const Wrapper = styled.div`
   background: #fff2cc;
   border: 1px solid #dabd63;
   padding: 8px;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   margin-bottom: 8px;

   &:last-child{
      margin: 0;
   }
`;

export const RepoAuthor = styled.div`
   font-size: 14px;
`;

export const Button = styled.button`
   border: 1px solid #abc888;
   background: #d5e8d4;
   height: 40px;
   min-width: 60px;
   margin-left: 8px;
`;
