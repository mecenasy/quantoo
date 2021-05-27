import React, { FC } from 'react';
import * as P from './Parts';

interface BorderProps {
   className?: string;
}

const Border: FC<BorderProps> = ({
   children,
   className,
}) => (
   <P.Border className={className}>
      {children}
   </P.Border>
);

export default Border;
