import React, { FC } from 'react';
import * as P from './Parts';

interface TitleProps {
   title: string;
}

const Title: FC<TitleProps> = ({
   title
}) => (
   <P.Title>
      {title}
   </P.Title>
);

export default Title;
