import React from 'react';

interface StepsProps {
  children: React.ReactNode;
}

export function Steps({ children }: StepsProps) {
  return (
    <ol className="list-decimal list-inside space-y-2 my-4 pl-4">
      {children}
    </ol>
  );
}

export default Steps;
