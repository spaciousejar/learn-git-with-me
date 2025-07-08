import React from 'react';
import Link from 'next/link';

interface LinkCardProps {
  title: string;
  href: string;
  description: string;
}

export function LinkCard({ title, href, description }: LinkCardProps) {
  const isExternal = href.startsWith('http');
  
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-4 border border-border rounded-lg hover:border-primary transition-colors"
      >
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </a>
    );
  }
  
  return (
    <Link href={href} className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Link>
  );
}

export default LinkCard;
