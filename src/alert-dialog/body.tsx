import React from 'react';

import { Dialog } from '../dialog';

import { bodyStyle } from './styles';

type BodyProps = {
  /* Alert dialog description. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Body({ children, ...restProps }: BodyProps) {
  return (
    <Dialog.Body {...restProps} css={bodyStyle()}>
      {children}
    </Dialog.Body>
  );
}

export default Body;
