'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface MermaidProps {
  chart: string;
  className?: string;
}

export function Mermaid({ chart, className = '' }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const { theme } = useTheme();

  useEffect(() => {
    let mounted = true;
    
    async function renderMermaid() {
      if (typeof window === 'undefined') return;
      
      try {
        const mermaid = (await import('mermaid')).default;
        
        // Configure Mermaid based on current theme
        const config = {
          startOnLoad: false,
          theme: (theme === 'dark' ? 'dark' : 'default') as 'dark' | 'default',
          themeVariables: {
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            fontSize: '14px',
          },
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
          },
          gitGraph: {
            theme: (theme === 'dark' ? 'dark' : 'base') as 'dark' | 'base',
            useMaxWidth: true,
            showBranches: true,
            showCommitLabel: true,
          }
        };
        
        mermaid.initialize(config);
        
        const graphId = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(graphId, chart);
        
        if (mounted) {
          setSvg(renderedSvg);
        }
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        if (mounted) {
          setSvg('<div class="text-red-500 p-4 border border-red-200 rounded">Failed to render diagram</div>');
        }
      }
    }

    renderMermaid();
    
    return () => {
      mounted = false;
    };
  }, [chart, theme]);

  return (
    <div 
      ref={ref}
      className={`mermaid-diagram flex justify-center my-6 ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}