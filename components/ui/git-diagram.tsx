'use client';

import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface GitBranchDiagramProps {
  className?: string;
  compact?: boolean;
}

export function GitBranchDiagram({ 
  className = '',
  compact = false 
}: GitBranchDiagramProps) {
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  const strokeColor = isDark ? '#e5e7eb' : '#374151';
  const textColor = isDark ? '#f3f4f6' : '#1f2937';
  const mainColor = isDark ? '#60a5fa' : '#2563eb';
  const featureColor = isDark ? '#34d399' : '#059669';
  
  if (compact) {
    return (
      <div className={cn("flex justify-center my-6", className)}>
        <svg width="400" height="120" viewBox="0 0 400 120" className="max-w-full">
          {/* Main branch line */}
          <line x1="40" y1="60" x2="360" y2="60" stroke={mainColor} strokeWidth="3" />
          
          {/* Feature branch line */}
          <line x1="120" y1="60" x2="120" y2="40" stroke={featureColor} strokeWidth="3" />
          <line x1="120" y1="40" x2="280" y2="40" stroke={featureColor} strokeWidth="3" />
          <line x1="280" y1="40" x2="280" y2="60" stroke={featureColor} strokeWidth="3" />
          
          {/* Commits on main */}
          <circle cx="80" cy="60" r="6" fill={mainColor} />
          <circle cx="160" cy="60" r="6" fill={mainColor} />
          <circle cx="320" cy="60" r="6" fill={mainColor} />
          
          {/* Commits on feature */}
          <circle cx="200" cy="40" r="6" fill={featureColor} />
          <circle cx="240" cy="40" r="6" fill={featureColor} />
          
          {/* Labels */}
          <text x="80" y="85" textAnchor="middle" fill={textColor} fontSize="12">A</text>
          <text x="160" y="85" textAnchor="middle" fill={textColor} fontSize="12">B</text>
          <text x="200" y="25" textAnchor="middle" fill={textColor} fontSize="12">C</text>
          <text x="240" y="25" textAnchor="middle" fill={textColor} fontSize="12">D</text>
          <text x="320" y="85" textAnchor="middle" fill={textColor} fontSize="12">E</text>
          
          {/* Branch labels */}
          <text x="25" y="65" fill={mainColor} fontSize="14" fontWeight="bold">main</text>
          <text x="15" y="45" fill={featureColor} fontSize="14" fontWeight="bold">feature</text>
        </svg>
      </div>
    );
  }
  
  return (
    <div className={cn("flex justify-center my-6", className)}>
      <svg width="500" height="200" viewBox="0 0 500 200" className="max-w-full">
        {/* Main branch line */}
        <line x1="50" y1="100" x2="450" y2="100" stroke={mainColor} strokeWidth="4" />
        
        {/* Feature branch */}
        <line x1="150" y1="100" x2="150" y2="60" stroke={featureColor} strokeWidth="4" />
        <line x1="150" y1="60" x2="350" y2="60" stroke={featureColor} strokeWidth="4" />
        <line x1="350" y1="60" x2="350" y2="100" stroke={featureColor} strokeWidth="4" />
        
        {/* Commits on main branch */}
        <circle cx="100" cy="100" r="8" fill={mainColor} stroke={isDark ? '#1e293b' : '#ffffff'} strokeWidth="2" />
        <circle cx="200" cy="100" r="8" fill={mainColor} stroke={isDark ? '#1e293b' : '#ffffff'} strokeWidth="2" />
        <circle cx="400" cy="100" r="8" fill={mainColor} stroke={isDark ? '#1e293b' : '#ffffff'} strokeWidth="2" />
        
        {/* Commits on feature branch */}
        <circle cx="225" cy="60" r="8" fill={featureColor} stroke={isDark ? '#1e293b' : '#ffffff'} strokeWidth="2" />
        <circle cx="275" cy="60" r="8" fill={featureColor} stroke={isDark ? '#1e293b' : '#ffffff'} strokeWidth="2" />
        <circle cx="325" cy="60" r="8" fill={featureColor} stroke={isDark ? '#1e293b' : '#ffffff'} strokeWidth="2" />
        
        {/* Merge arrow */}
        <line x1="350" y1="70" x2="380" y2="90" stroke={strokeColor} strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* Arrow marker definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
           refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={strokeColor} />
          </marker>
        </defs>
        
        {/* Commit labels */}
        <text x="100" y="130" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="500">A</text>
        <text x="200" y="130" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="500">B</text>
        <text x="225" y="45" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="500">C</text>
        <text x="275" y="45" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="500">D</text>
        <text x="325" y="45" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="500">E</text>
        <text x="400" y="130" textAnchor="middle" fill={textColor} fontSize="14" fontWeight="500">M</text>
        
        {/* Branch labels */}
        <text x="25" y="105" fill={mainColor} fontSize="16" fontWeight="bold">main</text>
        <text x="15" y="65" fill={featureColor} fontSize="16" fontWeight="bold">feature</text>
        
        {/* Commit messages */}
        <text x="100" y="150" textAnchor="middle" fill={textColor} fontSize="10">Initial commit</text>
        <text x="200" y="150" textAnchor="middle" fill={textColor} fontSize="10">Add feature base</text>
        <text x="400" y="150" textAnchor="middle" fill={textColor} fontSize="10">Merge feature</text>
      </svg>
    </div>
  );
}

interface GitWorkflowDiagramProps {
  type: 'basic' | 'staging' | 'remote';
  className?: string;
}

export function GitWorkflowDiagram({ type, className = '' }: GitWorkflowDiagramProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  if (type === 'basic') {
    return (
      <div className={cn("flex justify-center my-6", className)}>
        <svg width="600" height="150" viewBox="0 0 600 150" className="max-w-full">
          {/* Working Directory */}
          <rect x="20" y="20" width="120" height="80" rx="8" 
                fill={isDark ? '#1e293b' : '#f8fafc'} 
                stroke={isDark ? '#475569' : '#cbd5e1'} strokeWidth="2" />
          <text x="80" y="45" textAnchor="middle" fill={isDark ? '#e2e8f0' : '#334155'} fontSize="12" fontWeight="bold">
            Working Directory
          </text>
          <text x="80" y="65" textAnchor="middle" fill={isDark ? '#94a3b8' : '#64748b'} fontSize="10">
            Modified files
          </text>
          
          {/* Staging Area */}
          <rect x="200" y="20" width="120" height="80" rx="8" 
                fill={isDark ? '#1e293b' : '#f8fafc'} 
                stroke={isDark ? '#475569' : '#cbd5e1'} strokeWidth="2" />
          <text x="260" y="45" textAnchor="middle" fill={isDark ? '#e2e8f0' : '#334155'} fontSize="12" fontWeight="bold">
            Staging Area
          </text>
          <text x="260" y="65" textAnchor="middle" fill={isDark ? '#94a3b8' : '#64748b'} fontSize="10">
            Staged files
          </text>
          
          {/* Repository */}
          <rect x="380" y="20" width="120" height="80" rx="8" 
                fill={isDark ? '#1e293b' : '#f8fafc'} 
                stroke={isDark ? '#475569' : '#cbd5e1'} strokeWidth="2" />
          <text x="440" y="45" textAnchor="middle" fill={isDark ? '#e2e8f0' : '#334155'} fontSize="12" fontWeight="bold">
            Repository
          </text>
          <text x="440" y="65" textAnchor="middle" fill={isDark ? '#94a3b8' : '#64748b'} fontSize="10">
            Committed files
          </text>
          
          {/* Arrows */}
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" 
             refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill={isDark ? '#60a5fa' : '#2563eb'} />
            </marker>
          </defs>
          
          <line x1="150" y1="60" x2="190" y2="60" 
                stroke={isDark ? '#60a5fa' : '#2563eb'} strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="170" y="50" textAnchor="middle" fill={isDark ? '#60a5fa' : '#2563eb'} fontSize="11" fontWeight="500">
            git add
          </text>
          
          <line x1="330" y1="60" x2="370" y2="60" 
                stroke={isDark ? '#60a5fa' : '#2563eb'} strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="350" y="50" textAnchor="middle" fill={isDark ? '#60a5fa' : '#2563eb'} fontSize="11" fontWeight="500">
            git commit
          </text>
        </svg>
      </div>
    );
  }
  
  // Add other workflow types as needed
  return null;
}