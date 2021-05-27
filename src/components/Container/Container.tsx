import React, { FC } from 'react';
import * as P from './Parts';


const Container: FC = ({ children }) => (
   <div>
      <P.Border>
         {children}
      </P.Border>
   </div>
);

export default Container;
