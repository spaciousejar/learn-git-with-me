"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Terminal, GitBranch, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
  repositoryName = "awesome-project"
}) => {
  const [currentBranch, setCurrentBranch] = useState(initialBranch);
  const [currentInput, setCurrentInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [stagedFiles, setStagedFiles] = useState<string[]>([]);
  const [modifiedFiles, setModifiedFiles] = useState<string[]>(['src/components/Header.tsx', 'package.json', 'README.md']);
  const [stashList, setStashList] = useState<string[]>([]);
  // Remove unused state variables  
  const [remoteBranches] = useState(['origin/main', 'origin/develop', 'origin/feature/auth']);
  const [localBranches, setLocalBranches] = useState(['main', 'develop', 'feature/ui-update']);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isOnline] = useState(true);

  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateCommitHash = () => Math.random().toString(36).substr(2, 7);
  const generateTimestamp = () => new Date().toISOString().substring(0, 19).replace('T', ' ');

  const simulateGitCommand = (command: string): { output: string; success: boolean; newBranch?: string } => {
    const cmd = command.trim().toLowerCase();
    const parts = cmd.split(' ');
    
    if (cmd === 'git status' || cmd === 'git st') {
      const staged = stagedFiles.length > 0 ? `Changes to be committed:\n  (use "git restore --staged <file>..." to unstage)\n${stagedFiles.map(f => `\tmodified:   ${f}`).join('\n')}\n\n` : '';
      const modified = modifiedFiles.length > 0 ? `Changes not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n${modifiedFiles.map(f => `\tmodified:   ${f}`).join('\n')}` : 'nothing to commit, working tree clean';
      
      return {
        output: `On branch ${currentBranch}\nYour branch is up to date with 'origin/${currentBranch}'.\n\n${staged}${modified}`,
        success: true
      };
    }
    
    if (cmd === 'git add .' || cmd === 'git add -A') {
      setStagedFiles([...modifiedFiles]);
      setModifiedFiles([]);
      return {
        output: '',
        success: true
      };
    }

    if (cmd === 'git init') {
      return {
        output: 'Initialized empty Git repository in /Users/dev/awesome-project/.git/',
        success: true
      };
    }

    if (cmd === 'git clone') {
      return {
        output: 'Cloning into /Users/dev/awesome-project...',
        success: true
      };
    }
    if (cmd === 'git -v' || cmd === 'git --version') {
      return {
        output: 'git version 2.40.0',
        success: true
      };
    }
    if (cmd === 'whoami') {
      return {
        output: 'dev',
        success: true
      };
    }
    if (cmd === 'git --help' || cmd === 'git help') {
      return {
        output: 'usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]\n           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]\n           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]\n           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]\n           <command> [<args>]\n\nThese are common Git commands used in various situations:\n\nstart a working area (see also: git help tutorial)\n   clone      Clone a repository into a new directory\n   init       Create an empty Git repository or reinitialize an existing one\n\nwork on the current change (see also: git help everyday)\n   add        Add file contents to the index\n   mv         Move or rename a file, a directory, or a symlink\n   reset      Reset current HEAD to the specified state\n   rm         Remove files from the working tree and from the index',
        success: true
      };
    }
    if (cmd === "help" || cmd === "man" || cmd === "-h" || cmd === "--help") {
      return {
        output: "git: 'help' is not a git command. See 'git --help'.",
        success: false
      };
    }


    
    if (cmd.startsWith('git add ')) {
      const files = cmd.substring(8).split(' ');
      const newStaged = [...stagedFiles];
      const newModified = modifiedFiles.filter(f => {
        if (files.some(file => f.includes(file) || file === '.')) {
          newStaged.push(f);
          return false;
        }
        return true;
      });
      setStagedFiles(newStaged);
      setModifiedFiles(newModified);
      return {
        output: '',
        success: true
      };
    }
    
    if (cmd.startsWith('git commit')) {
      if (stagedFiles.length === 0) {
        return {
          output: 'On branch main\nnothing to commit, working tree clean',
          success: false
        };
      }
      
      const message = cmd.match(/-m\s+"([^"]+)"/)?.[1] || cmd.match(/-m\s+(\S+)/)?.[1] || 'commit message';
      const hash = generateCommitHash();
      setStagedFiles([]);
      
      return {
        output: `[${currentBranch} ${hash}] ${message}\n ${stagedFiles.length} file${stagedFiles.length > 1 ? 's' : ''} changed, ${Math.floor(Math.random() * 20) + 1} insertions(+), ${Math.floor(Math.random() * 10)} deletions(-)`,
        success: true
      };
    }
    
    if (cmd === 'git branch' || cmd === 'git branch -a') {
      const showRemote = cmd.includes('-a');
      const branches = localBranches.map(b => b === currentBranch ? `* ${b}` : `  ${b}`).join('\n');
      const remoteBranchList = showRemote ? '\n' + remoteBranches.map(b => `  remotes/${b}`).join('\n') : '';
      
      return {
        output: branches + remoteBranchList,
        success: true
      };
    }
    
    if (cmd.startsWith('git checkout -b ')) {
      const branchName = parts[3];
      if (!branchName) {
        return { output: 'error: branch name required', success: false };
      }
      setLocalBranches(prev => [...prev, branchName]);
      return {
        output: `Switched to a new branch '${branchName}'`,
        success: true,
        newBranch: branchName
      };
    }
    
    if (cmd.startsWith('git checkout ') || cmd.startsWith('git switch ')) {
      const branchName = parts[2];
      if (localBranches.includes(branchName)) {
        return {
          output: `Switched to branch '${branchName}'`,
          success: true,
          newBranch: branchName
        };
      }
      return {
        output: `error: pathspec '${branchName}' did not match any file(s) known to git`,
        success: false
      };
    }
    
    if (cmd === 'git push' || cmd.startsWith('git push ')) {
      const hash1 = generateCommitHash();
      const hash2 = generateCommitHash();
      return {
        output: `Enumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (3/3), done.\nWriting objects: 100% (3/3), 312 bytes | 312.00 KiB/s, done.\nTotal 3 (delta 2), reused 0 (delta 0), pack-reused 0\nremote: Resolving deltas: 100% (2/2), completed with 2 local objects.\nTo github.com:user/${repositoryName}.git\n   ${hash1}..${hash2}  ${currentBranch} -> ${currentBranch}`,
        success: true
      };
    }
    
    if (cmd === 'git pull' || cmd.startsWith('git pull ')) {
      return {
        output: `remote: Enumerating objects: 3, done.\nremote: Counting objects: 100% (3/3), done.\nremote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0\nUnpacking objects: 100% (3/3), 256 bytes | 128.00 KiB/s, done.\nFrom github.com:user/${repositoryName}\n * branch            ${currentBranch}     -> FETCH_HEAD\nAlready up to date.`,
        success: true
      };
    }
    
    if (cmd === 'git log' || cmd === 'git log --oneline') {
      const isOneline = cmd.includes('--oneline');
      if (isOneline) {
        return {
          output: `${generateCommitHash()} (HEAD -> ${currentBranch}, origin/${currentBranch}) Latest commit\n${generateCommitHash()} Add new feature\n${generateCommitHash()} Fix bug in authentication\n${generateCommitHash()} Update documentation\n${generateCommitHash()} Initial commit`,
          success: true
        };
      } else {
        return {
          output: `commit ${generateCommitHash()}${generateCommitHash()}${generateCommitHash()}${generateCommitHash()} (HEAD -> ${currentBranch}, origin/${currentBranch})\nAuthor: Developer <dev@example.com>\nDate:   ${generateTimestamp()}\n\n    Latest commit\n\ncommit ${generateCommitHash()}${generateCommitHash()}${generateCommitHash()}${generateCommitHash()}\nAuthor: Developer <dev@example.com>\nDate:   ${generateTimestamp()}\n\n    Add new feature`,
          success: true
        };
      }
    }
    
    if (cmd === 'git diff') {
      return {
        output: `diff --git a/src/index.js b/src/index.js\nindex 1234567..abcdefg 100644\n--- a/src/index.js\n+++ b/src/index.js\n@@ -1,5 +1,6 @@\n function main() {\n   console.log('Hello World');\n+  console.log('New feature added');\n   return true;\n }\n \n module.exports = main;`,
        success: true
      };
    }
    
    if (cmd === 'git stash' || cmd === 'git stash push') {
      if (modifiedFiles.length === 0) {
        return {
          output: 'No local changes to save',
          success: true
        };
      }
      const stashMessage = `WIP on ${currentBranch}: ${generateCommitHash()} Latest commit`;
      setStashList(prev => [stashMessage, ...prev]);
      setModifiedFiles([]);
      return {
        output: `Saved working directory and index state ${stashMessage}`,
        success: true
      };
    }
    
    if (cmd === 'git stash list') {
      if (stashList.length === 0) {
        return { output: '', success: true };
      }
      const list = stashList.map((stash, i) => `stash@{${i}}: ${stash}`).join('\n');
      return {
        output: list,
        success: true
      };
    }
    
    if (cmd === 'clear' || cmd === 'cls') {
      return {
        output: 'CLEAR_TERMINAL',
        success: true
      };
    }
    
    if (cmd === 'pwd') {
      return {
        output: `/Users/dev/${repositoryName}`,
        success: true
      };
    }
    
    if (cmd === 'whoami') {
      return {
        output: 'dev',
        success: true
      };
    }
    
    if (cmd === 'ls' || cmd === 'ls -la' || cmd === 'dir') {
      const showHidden = cmd.includes('-a');
      const longFormat = cmd.includes('-l');
      
      if (longFormat) {
        return {
          output: `total 24\ndrwxr-xr-x  8 dev  staff   256 Dec 15 10:30 .\ndrwxr-xr-x  3 dev  staff    96 Dec 15 10:25 ..\n-rw-r--r--  1 dev  staff   120 Dec 15 10:30 .gitignore\n${showHidden ? '-rw-r--r--  1 dev  staff   45 Dec 15 10:28 .env\ndrwxr-xr-x  8 dev  staff   256 Dec 15 10:30 .git\n' : ''}drwxr-xr-x  4 dev  staff   128 Dec 15 10:29 src\n-rw-r--r--  1 dev  staff  1024 Dec 15 10:30 package.json\n-rw-r--r--  1 dev  staff  2048 Dec 15 10:30 README.md`,
          success: true
        };
      } else {
        return {
          output: `${showHidden ? '.env  .git  .gitignore  ' : ''}src/  package.json  README.md  node_modules/  dist/`,
          success: true
        };
      }
    }
    
    if (cmd.startsWith('cd ')) {
      const path = parts[1] || '~';
      if (path === '..') {
        return {
          output: '',
          success: true
        };
      } else if (path === '~' || path === '/') {
        return {
          output: '',
          success: true
        };
      } else if (['src', 'components', 'dist', 'node_modules'].includes(path)) {
        return {
          output: '',
          success: true
        };
      } else {
        return {
          output: `cd: no such file or directory: ${path}`,
          success: false
        };
      }
    }
    
    if (cmd.startsWith('cat ') || cmd.startsWith('type ')) {
      const filename = parts[1] || '';
      if (filename === 'README.md') {
        return {
          output: `# ${repositoryName}\n\nA modern web application built with:\n- React 18\n- TypeScript\n- Vite\n- Tailwind CSS\n\n## Getting Started\n\n\`\`\`bash\nnpm install\nnpm run dev\n\`\`\`\n\n## Git Workflow\n\nThis project follows conventional commits and Git best practices.`,
          success: true
        };
      } else if (filename === 'package.json') {
        return {
          output: `{\n  "name": "${repositoryName}",\n  "version": "1.0.0",\n  "type": "module",\n  "scripts": {\n    "dev": "vite",\n    "build": "tsc && vite build",\n    "preview": "vite preview"\n  },\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0"\n  },\n  "devDependencies": {\n    "@types/react": "^18.0.28",\n    "typescript": "^4.9.3",\n    "vite": "^4.1.0"\n  }\n}`,
          success: true
        };
      } else {
        return {
          output: `cat: ${filename}: No such file or directory`,
          success: false
        };
      }
    }
    
    if (cmd === 'date') {
      return {
        output: new Date().toString(),
        success: true
      };
    }
    
    if (cmd === 'uname' || cmd === 'uname -a') {
      return {
        output: 'Darwin terminal-simulator 22.1.0 Darwin Kernel Version 22.1.0 x86_64',
        success: true
      };
    }
    
    if (cmd === 'git --help' || cmd === 'git help') {
      return {
        output: `usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]\n           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]\n           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]\n           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]\n           <command> [<args>]\n\nThese are common Git commands used in various situations:\n\nstart a working area (see also: git help tutorial)\n   clone      Clone a repository into a new directory\n   init       Create an empty Git repository or reinitialize an existing one\n\nwork on the current change (see also: git help everyday)\n   add        Add file contents to the index\n   mv         Move or rename a file, a directory, or a symlink\n   reset      Reset current HEAD to the specified state\n   rm         Remove files from the working tree and from the index`,
        success: true
      };
    }
    
    if (cmd.startsWith('git ')) {
      const gitCmd = cmd.split(' ')[1];
      return {
        output: `git: '${gitCmd}' is not a git command. See 'git --help'.\n\nThe most similar command is\n\tstatus`,
        success: false
      };
    }
    
    return {
      output: `command not found: ${command.split(' ')[0]}`,
      success: false
    };
  };

  const handleCommand = useCallback((command: string) => {
    if (!command.trim()) return;

    setIsTyping(true);
    
    // Simulate realistic command execution time based on command type
    const getExecutionTime = (cmd: string) => {
      if (cmd.includes('push') || cmd.includes('pull') || cmd.includes('clone')) {
        return 2000 + Math.random() * 1500; // Network operations take longer
      } else if (cmd.includes('commit') || cmd.includes('merge') || cmd.includes('rebase')) {
        return 800 + Math.random() * 700; // Write operations
      } else if (cmd.includes('log') || cmd.includes('status') || cmd.includes('diff')) {
        return 200 + Math.random() * 400; // Read operations
      } else {
        return 300 + Math.random() * 500; // Default
      }
    };
    
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
    }, getExecutionTime(command));
  }, [simulateGitCommand]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (currentInput.trim()) {
        setCommandHistory(prev => [...prev, currentInput]);
        setHistoryIndex(-1);
      }
      handleCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        } else {
          setHistoryIndex(-1);
          setCurrentInput('');
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion for git commands
      const commonCommands = ['git status', 'git add', 'git commit', 'git push', 'git pull', 'git branch', 'git checkout', 'git log', 'git diff', 'git stash'];
      const matches = commonCommands.filter(cmd => cmd.startsWith(currentInput));
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    }
  };

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (terminalRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = terminalRef.current;
      setIsScrolledUp(scrollTop + clientHeight < scrollHeight - 100);
    }
  };

  useEffect(() => {
    if (terminalRef.current && !isScrolledUp) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, isScrolledUp]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
        <Card className={`bg-black border-none shadow-2xl relative overflow-hidden mr-2`}>
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between p-3 border-b  backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></button>
                <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"></button>
                <button 
                  className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                ></button>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-gray-200">zsh</span>
                <span className="text-xs text-gray-500">—</span>
                <span className="text-xs text-gray-400">{repositoryName}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-xs text-emerald-400 border-emerald-400/30 bg-emerald-400/5">
                <GitBranch className="w-3 h-3 mr-1" />
                {currentBranch}
              </Badge>
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`} title={isOnline ? 'Online' : 'Offline'}></div>
            </div>
          </div>
          
          {/* Terminal Body */}
          <div 
            ref={terminalRef}
            className={`${isFullscreen ? '' : 'h-[300px]'} overflow-y-auto p-4 font-mono text-sm bg-black text-green-400 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent relative cursor-text select-text`}
            onClick={() => inputRef.current?.focus()}
            onScroll={handleScroll}
            style={{
              background: 'linear-gradient)',
              textShadow: '0 0 2px rgba(74, 222, 128, 0.3)'
            }}
          >

            
            {history.map((entry, index) => (
              <div key={index} className="mb-4 group">
                <div className="flex items-center gap-2 text-blue-400 flex-wrap">
                  <span className="text-emerald-400 font-bold">dev@terminal</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-cyan-400 font-medium">~/{repositoryName}</span>
                  <span className="text-purple-400">({currentBranch})</span>
                  <span className="text-yellow-400 font-bold">❯</span>
                  <span className="text-white break-all font-medium">{entry.command}</span>
                </div>
                {entry.output && (
                  <div className={`mt-2 whitespace-pre-wrap break-words font-mono leading-relaxed ${entry.success ? 'text-green-300' : 'text-red-400'} opacity-90`}>
                    {entry.output}
                  </div>
                )}
              </div>
            ))}
            
            {/* Active Command Line */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-emerald-400 font-bold">dev@terminal</span>
              <span className="text-gray-500">:</span>
              <span className="text-cyan-400 font-medium">~/{repositoryName}</span>
              <span className="text-purple-400">({currentBranch})</span>
              <span className="text-yellow-400 font-bold animate-pulse">❯</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono min-w-0 caret-green-400"
                placeholder={isTyping ? "Processing command..." : "Enter git command"}
                disabled={isTyping}
                autoComplete="off"
                spellCheck="false"
                style={{ textShadow: '0 0 4px rgba(74, 222, 128, 0.3)' }}
              />
              {isTyping && (
                <div className="flex items-center gap-1">
                  <span className="animate-spin text-yellow-400">⟳</span>
                  <span className="text-gray-400 text-xs">executing...</span>
                </div>
              )}
            </div>
          </div>

          {isScrolledUp && (
            <div className="absolute bottom-4 right-4">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
                onClick={scrollToBottom}
              >
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          )}
        </Card>
  );
};

export default GitTerminal;
