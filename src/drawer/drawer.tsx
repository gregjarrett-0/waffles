import { Dialog } from '../dialog';

import DrawerInternal from './drawer-internal';

const DrawerNamespace = Object.assign(DrawerInternal, {
  Header: Dialog.Header,
  Body: Dialog.Body,
  Footer: Dialog.Footer,
  Button: Dialog.Button,
  CloseButton: Dialog.CloseButton,
});

export default DrawerNamespace;
