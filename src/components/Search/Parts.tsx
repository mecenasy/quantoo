import styled from 'styled-components';
import BorderBase from '../Border/Border';

export const Border = styled(BorderBase)`
   padding: 4px 16px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const SearchTitle = styled.div`
   font-size: 12px;
   line-height: 12px;
   margin-right: 8px;
`;

export const Input = styled.input`
   background: #dae8fc;
   border: 1px solid #abc1e2;
   width: 80%;
`;