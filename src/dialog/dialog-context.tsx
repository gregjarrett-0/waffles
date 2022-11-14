/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext } from 'react';

type DialogContextValue = {
  headerId: string;
  bodyId: string;
};

const DialogContext = createContext<DialogContextValue>(undefined!);

type DialogProviderProps = {
  children: React.ReactNode;
} & DialogContextValue;

function DialogProvider({ children, ...value }: DialogProviderProps) {
  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
}

function useDialog() {
  const context = useContext(DialogContext);

  if (context === undefined) {
    throw new Error(
      'Make sure to wrap useDialog with a DialogProvider or Dialog component.',
    );
  }

  return context;
}

export { DialogProvider, useDialog };
