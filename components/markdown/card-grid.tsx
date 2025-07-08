import React from 'react';

interface CardGridProps {
  children: React.ReactNode;
}

export function CardGrid({ children }: CardGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 my-6">
      {children}
    </div>
  );
}

export default CardGrid;
