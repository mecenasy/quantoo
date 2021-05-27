import styled from 'styled-components';
import BorderBase from '../Border/Border';

export const Portal = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: flex;
   justify-content: center;
   align-items: center;
`;


export const Border = styled(BorderBase)`
   width: 300px;
   height: 400px;
   background: white;
   box-shadow: 0 0 3px 0;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;

   textArea {
      margin-bottom: 12px;
      height: 200px;
      resize: none;
   }
`;
