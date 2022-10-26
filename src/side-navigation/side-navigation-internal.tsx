import React from 'react';

import { useMediaQuery } from '../hooks';

import { SidebarProvider } from './sidebar-context';
import Sidebar from './sidebar';
import AnimatedSidebar from './animated-sidebar';

type SideNavigationProps = {
  /* Determines if the Side Navigation sidebar is open. */
  isOpen: boolean;
  /* Handler called when the sidebar will close. */
  onClose: () => void;
  /* Content of the sidebar, either `SideNavigation.Nav` or custom components. */
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function SideNavigationInternal({
  isOpen,
  onClose,
  children,
  ...restProps
}: SideNavigationProps) {
  const { isAboveMedium } = useMediaQuery();

  // Render regular sidebar for all viewport sizes above medium breakpoint
  if (isAboveMedium) {
    return <Sidebar {...restProps}>{children}</Sidebar>;
  }

  // Render mobile sidebar, and pass isOpen and onClose to nested children
  return (
    <SidebarProvider {...{ isOpen, onClose }}>
      <AnimatedSidebar {...restProps}>{children}</AnimatedSidebar>
    </SidebarProvider>
  );
}

export default SideNavigationInternal;
