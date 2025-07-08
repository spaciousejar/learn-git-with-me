import React from 'react';
import { cn } from '@/lib/utils';

interface AsideProps {
  type?: 'note' | 'tip' | 'caution' | 'danger';
  children: React.ReactNode;
}

export function Aside({ type = 'note', children }: AsideProps) {
  const variants = {
    note: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100',
    tip: 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100',
    caution: 'border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100',
    danger: 'border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100',
  };

  const icons = {
    note: '💡',
    tip: '💡',
    caution: '⚠️',
    danger: '🚨',
  };

  const labels = {
    note: 'Note',
    tip: 'Tip',
    caution: 'Caution',
    danger: 'Danger',
  };

  return (
    <div className={cn('border-l-4 p-4 my-4 rounded-r-lg', variants[type])}>
      <div className="flex items-center gap-2 mb-2 font-semibold">
        <span>{icons[type]}</span>
        <span>{labels[type]}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Aside;
