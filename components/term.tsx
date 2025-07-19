"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Terminal, GitBranch, FolderGit2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CommandHistory {
  command: string;
  output: string;
  timestamp: Date;
  success: boolean;
}

interface GitTerminalProps {
  initialBranch?: string;
  repositoryName?: string;
}

const GitTerminal: React.FC<GitTerminalProps> = ({
  initialBranch = "main",
  repositoryName = "my-project"
}) => {
  const [currentBranch, setCurrentBranch] = useState(initialBranch);
  const [currentInput, setCurrentInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const gitCommands = [
    'git status',
    'git add .',
    'git commit -m "message"',
    'git push',
    'git pull',
    'git branch',
    'git checkout -b new-branch',
    'git merge branch-name',
    'git log --oneline',
    'git diff',
    'git reset --hard',
    'git stash',
    'git stash pop'
  ];

  const simulateGitCommand = (command: string): { output: string; success: boolean; newBranch?: string } => {
    const cmd = command.trim().toLowerCase();
    
    if (cmd === 'git status') {
      return {
        output: `On branch ${currentBranch}\nYour branch is up to date with 'origin/${currentBranch}'.\n\nnothing to commit, working tree clean`,
        success: true
      };
    }
    
    if (cmd === 'git add .') {
      return {
        output: 'Changes staged for commit.',
        success: true
      };
    }
    
    if (cmd.startsWith('git commit -m')) {
      const message = cmd.match(/"([^"]+)"/)?.[1] || 'commit message';
      return {
        output: `[${currentBranch} ${Math.random().toString(36).substr(2, 7)}] ${message}\n 1 file changed, 5 insertions(+), 2 deletions(-)`,
        success: true
      };
    }
    
    if (cmd === 'git push') {
      return {
        output: `Enumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nTo github.com:user/${repositoryName}.git\n   ${Math.random().toString(36).substr(2, 7)}..${Math.random().toString(36).substr(2, 7)}  ${currentBranch} -> ${currentBranch}`,
        success: true
      };
    }
    
    if (cmd === 'git pull') {
      return {
        output: `Already up to date.`,
        success: true
      };
    }
    
    if (cmd === 'git branch') {
      return {
        output: `  develop\n* ${currentBranch}\n  feature/new-feature`,
        success: true
      };
    }
    
    if (cmd.startsWith('git checkout -b')) {
      const branchName = cmd.split(' ')[3] || 'new-branch';
      return {
        output: `Switched to a new branch '${branchName}'`,
        success: true,
        newBranch: branchName
      };
    }
    
    if (cmd.startsWith('git checkout')) {
      const branchName = cmd.split(' ')[2] || 'main';
      return {
        output: `Switched to branch '${branchName}'`,
        success: true,
        newBranch: branchName
      };
    }
    
    if (cmd === 'git log --oneline') {
      return {
        output: `${Math.random().toString(36).substr(2, 7)} (HEAD -> ${currentBranch}) Latest commit\n${Math.random().toString(36).substr(2, 7)} Previous commit\n${Math.random().toString(36).substr(2, 7)} Initial commit`,
        success: true
      };
    }
    
    if (cmd === 'git diff') {
      return {
        output: 'diff --git a/file.txt b/file.txt\nindex 1234567..abcdefg 100644\n--- a/file.txt\n+++ b/file.txt\n@@ -1,3 +1,4 @@\n line 1\n line 2\n+new line\n line 3',
        success: true
      };
    }
    
    if (cmd === 'git stash') {
      return {
        output: `Saved working directory and index state WIP on ${currentBranch}: ${Math.random().toString(36).substr(2, 7)} Latest commit`,
        success: true
      };
    }
    
    if (cmd === 'git stash pop') {
      return {
        output: `On branch ${currentBranch}\nChanges not staged for commit:\n  modified:   file.txt\n\nDropped refs/stash@{0}`,
        success: true
      };
    }
    
    if (cmd === 'clear') {
      return {
        output: 'CLEAR_TERMINAL',
        success: true
      };
    }
    
    return {
      output: `git: '${command.split(' ')[1] || command}' is not a git command. See 'git --help'.`,
      success: false
    };
  };

  const handleCommand = (command: string) => {
    if (!command.trim()) return;

    setIsTyping(true);
    
    setTimeout(() => {
      const result = simulateGitCommand(command);
      
      if (result.output === 'CLEAR_TERMINAL') {
        setHistory([]);
      } else {
        const newEntry: CommandHistory = {
          command,
          output: result.output,
          timestamp: new Date(),
          success: result.success
        };
        
        setHistory(prev => [...prev, newEntry]);
        
        if (result.newBranch) {
          setCurrentBranch(result.newBranch);
        }
      }
      
      setIsTyping(false);
      setCurrentInput('');
    }, 500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
    }
  };

  const handleQuickCommand = (command: string) => {
    setCurrentInput(command);
    setTimeout(() => {
      handleCommand(command);
    }, 100);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (

      <div className="flex justify-center items-center">
        <div className="lg:col-span-3">
          <Card className="bg-black border-border">
            <div className="flex items-center justify-between p-3 border-b border-border bg-muted/20">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-2 text-green-400" />
                <span className="text-sm font-medium text-foreground">Terminal</span>
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            <div 
              ref={terminalRef}
              className="h-64 overflow-y-auto p-4 font-mono text-sm bg-black text-green-400"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((entry, index) => (
                <div key={index} className="mb-3">
                  <div className="flex items-center gap-2 text-blue-400">
                    <span className="text-green-400">user@git</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~/{repositoryName}</span>
                    <span className="text-purple-400">({currentBranch})</span>
                    <span className="text-white">$</span>
                    <span className="text-white">{entry.command}</span>
                  </div>
                  <div className={`mt-1 whitespace-pre-wrap ${entry.success ? 'text-green-400' : 'text-red-400'}`}>
                    {entry.output}
                  </div>
                </div>
              ))}
              
              <div className="flex items-center gap-2">
                <span className="text-green-400">user@git</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/{repositoryName}</span>
                <span className="text-purple-400">({currentBranch})</span>
                <span className="text-white">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                  placeholder={isTyping ? "Processing..." : "Type a git command..."}
                  disabled={isTyping}
                />
                {isTyping && <span className="animate-pulse text-white">|</span>}
              </div>
            </div>
          </Card>
        </div>
      </div>
  );
};

export default GitTerminal;
