/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext, useContext } from 'react';

type TableContextValue = {
  inverted: boolean;
};

const TableContext = createContext<TableContextValue>(undefined!);

type TableProviderProps = {
  children: React.ReactNode;
} & TableContextValue;

function TableProvider({ children, ...value }: TableProviderProps) {
  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
}

function useTable() {
  const context = useContext(TableContext);

  if (context === undefined) {
    throw new Error(
      'Make sure to wrap useTable with a TableProvider or Table component.',
    );
  }

  return context;
}

export { TableProvider, useTable };
