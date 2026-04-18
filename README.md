# Learning Git

## Introduction

Git is a distributed version control system that tracks changes in source code during software development. It allows multiple developers to work on the same project simultaneously, maintains a history of changes, and provides tools for collaboration and code management.

## Why Learn Git?

- **Version Control**: Track changes and revert to previous states
- **Collaboration**: Work with others on the same codebase
- **Backup**: Your code is safely stored and can be recovered
- **Branching**: Experiment with new features without affecting main code
- **Industry Standard**: Used by virtually all software development teams
- **Open Source**: Essential for contributing to open-source projects

## Installation

### Windows
Download from [git-scm.com](https://git-scm.com/download/win) and follow the installer.

### macOS
```bash
# Using Homebrew
brew install git

# Or download from git-scm.com
```

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install git
```

### Verify Installation
```bash
git --version
```

## Basic Configuration

Set up your identity (do this once):
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Set default editor:
```bash
git config --global core.editor "code --wait"  # For VS Code
# or
git config --global core.editor "nano"
```

## Core Concepts

### Repository
A Git repository (repo) is a directory that contains your project files and the entire history of changes.

### Working Directory
The current state of your files on disk.

### Staging Area (Index)
A middle ground between working directory and repository where you prepare changes for commit.

### Commit
A snapshot of your changes at a specific point in time.

### Branch
A separate line of development that allows you to work on features independently.

### Remote
A version of your repository hosted on a server (like GitHub, GitLab).

## Getting Started

### Initialize a Repository
```bash
# Create a new directory
mkdir my-project
cd my-project

# Initialize Git repository
git init
```

### Clone an Existing Repository
```bash
git clone https://github.com/username/repository-name.git
cd repository-name
```

## Basic Workflow

### Check Status
```bash
git status
```

### Add Files to Staging
```bash
# Add specific file
git add filename.txt

# Add all files
git add .

# Add all modified files (not new untracked files)
git add -u
```

### Commit Changes
```bash
# Commit with message
git commit -m "Add feature X"

# Commit all tracked files
git commit -a -m "Update documentation"
```

### View History
```bash
# Show commit history
git log

# Show compact history
git log --oneline

# Show with graph
git log --graph --oneline
```

## Branching

### Create and Switch Branches
```bash
# Create and switch to new branch
git checkout -b feature-branch

# Switch to existing branch
git checkout main

# List all branches
git branch
```

### Merge Branches
```bash
# Merge feature-branch into current branch
git merge feature-branch
```

### Delete Branches
```bash
# Delete local branch
git branch -d feature-branch

# Force delete (if not merged)
git branch -D feature-branch
```

## Working with Remotes

### Add Remote
```bash
git remote add origin https://github.com/username/repo.git
```

### Push Changes
```bash
# Push current branch to remote
git push origin main

# Push new branch
git push -u origin feature-branch
```

### Pull Changes
```bash
# Fetch and merge
git pull origin main

# Fetch only
git fetch origin
```

### Clone and Fork Workflow
```bash
# Fork on GitHub, then clone your fork
git clone https://github.com/yourusername/repo.git
cd repo

# Add upstream remote
git remote add upstream https://github.com/original/repo.git

# Sync with upstream
git fetch upstream
git merge upstream/main
```

## Undoing Changes

### Unstage Files
```bash
# Unstage specific file
git reset HEAD filename.txt

# Unstage all
git reset
```

### Discard Working Directory Changes
```bash
# Discard changes to specific file
git checkout -- filename.txt

# Discard all changes
git checkout -- .
```

### Amend Last Commit
```bash
git commit --amend -m "New commit message"
```

### Revert Commits
```bash
# Create new commit that undoes changes
git revert commit-hash

# Reset to previous commit (dangerous!)
git reset --hard commit-hash
```

## Advanced Topics

### Rebasing
```bash
# Rebase current branch onto main
git checkout feature-branch
git rebase main

# Interactive rebase
git rebase -i HEAD~3
```

### Stashing
```bash
# Save changes temporarily
git stash

# Apply stashed changes
git stash apply

# List stashes
git stash list

# Drop stash
git stash drop
```

### Tagging
```bash
# Create lightweight tag
git tag v1.0

# Create annotated tag
git tag -a v1.0 -m "Version 1.0"

# Push tags
git push origin --tags
```

### Gitignore
Create `.gitignore` file:
```
# Compiled files
*.class
*.exe

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
```

## Collaboration Workflow

### Feature Branch Workflow
1. Create feature branch: `git checkout -b feature-x`
2. Make changes and commit
3. Push branch: `git push origin feature-x`
4. Create pull request on GitHub
5. Merge after review

### Git Flow
- `main`: Production-ready code
- `develop`: Integration branch
- `feature/*`: Feature branches
- `release/*`: Release preparation
- `hotfix/*`: Emergency fixes

## Troubleshooting

### Common Issues

**Merge Conflicts**
```bash
# During merge, edit conflicted files
# Then add and commit
git add resolved-file.txt
git commit
```

**Detached HEAD**
```bash
# Create branch from current state
git checkout -b temp-branch
```

**Lost Commits**
```bash
# Find lost commits
git reflog

# Recover
git checkout commit-hash
```

## Best Practices

- **Commit Often**: Make small, focused commits
- **Write Good Messages**: Use imperative mood, be descriptive
- **Use Branches**: Don't work directly on main
- **Pull Before Push**: Always sync with remote before pushing
- **Review Changes**: Use `git diff` and `git status` frequently
- **Don't Commit Generated Files**: Use `.gitignore`
- **Use Meaningful Branch Names**: `feature/add-login` not `branch1`

## Learning Resources

### Official Documentation
- [Git Documentation](https://git-scm.com/doc)
- [Pro Git Book](https://git-scm.com/book/en/v2) (free online)

### Interactive Tutorials
- [Learn Git Branching](https://learngitbranching.js.org/)
- [GitHub Learning Lab](https://lab.github.com/)
- [Codecademy Git Course](https://www.codecademy.com/learn/learn-git)

### Video Courses
- [Git & GitHub Crash Course](https://www.youtube.com/watch?v=SWYqp7iY_Tc) on YouTube
- [Udacity Git Course](https://www.udacity.com/course/version-control-with-git--ud123)

### Practice Platforms
- [GitHub](https://github.com) - Create repositories and practice
- [GitLab](https://gitlab.com) - Alternative platform
- [Exercism Git Track](https://exercism.org/tracks/git)

## Git Commands Cheat Sheet

### Repository
- `git init`: Initialize repository
- `git clone <url>`: Clone repository
- `git remote -v`: List remotes

### Changes
- `git status`: Check status
- `git add <file>`: Stage file
- `git commit -m "msg"`: Commit changes
- `git diff`: Show differences

### Branches
- `git branch`: List branches
- `git checkout <branch>`: Switch branch
- `git merge <branch>`: Merge branch

### Remote
- `git push`: Push to remote
- `git pull`: Pull from remote
- `git fetch`: Fetch from remote

### History
- `git log`: Show history
- `git blame <file>`: Show who changed what
- `git reflog`: Show reference logs

## Next Steps

1. Practice with a personal project
2. Contribute to open-source projects on GitHub
3. Learn GitHub features (issues, pull requests, actions)
4. Explore Git GUIs (GitKraken, SourceTree, VS Code integration)
5. Study advanced topics like rebasing, cherry-picking, and submodules

Remember, Git has a learning curve, but mastering it will greatly improve your development workflow. Start with basic commands, practice regularly, and gradually incorporate more advanced features into your workflow.