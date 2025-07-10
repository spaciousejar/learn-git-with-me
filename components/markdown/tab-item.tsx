import React from 'react';

interface TabItemProps {
  label: string;
  children: React.ReactNode;
}

// Note: This is a simple wrapper component. 
// The actual tab functionality should be handled by the parent Tabs component
export function TabItem({ label, children }: TabItemProps) {
  return <div data-label={label}>{children}</div>;
}

export default TabItem;
