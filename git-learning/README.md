# Git Learning Guide

## Commit Message Conventions

The most commonly used commit types:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **refactor**: Code refactoring (without changing behavior)
- **test**: Adding or updating tests
- **chore**: Internal tasks (config, dependencies, etc.)
- **style**: Code formatting (spaces, semicolons, etc.)
- **perf**: Performance improvements
- **build**: Build system changes (webpack, vite, etc.)
- **ci**: Continuous integration (GitHub Actions, etc.)

### Real Examples
- `feat: add user login`
- `fix: resolve login validation bug`
- `docs: update README with setup instructions`
- `refactor: simplify authentication logic`
- `test: add unit tests for user service`
- `chore: update dependencies`
- `style: fix code formatting`
- `perf: improve query performance`

### Important Tip
You used `feature/` as a branch name — that's common.

But in commits, the standard is to use `feat:` (abbreviated).

**Ideal Example:**

Branch: `feature/learning-git`  
Commit: `feat: add git learning README`

## Essential Git Commands

### Initialization and Status
- `git init` → Initialize a Git repository
- `git status` → Check the status of the repository (what files are staged, modified, etc.)

### Adding and Committing
- `git add <filename>` → Stage a specific file
- `git add .` → Stage all changes
- `git commit -m "message"` → Commit staged changes with a message

### Remote Repositories
- `git remote add origin <url>` → Add a remote repository
- `git branch -M main` → Rename current branch to main
- `git push -u origin main` → Push changes to remote and set upstream
- `git clone <url>` → Clone a remote repository
- `git pull` → Fetch and merge changes from remote

### Branching
- `git checkout -b <branch-name>` → Create and switch to a new branch
- `git branch` → List all branches
- `git switch <branch-name>` → Switch to a branch
- `git merge <branch-name>` → Merge a branch into current
- `git push --set-upstream origin <branch-name>` → Push new branch to remote

### History and Inspection
- `git log` → View commit history
- `git show <commit>` → Show details of a commit
- `git diff` → Show differences between working directory and staged
- `git diff --staged` → Show differences between staged and last commit

### Undoing Changes
- `git reset --soft <commit>` → Reset to commit, keep changes staged
- `git reset --mixed <commit>` → Reset to commit, keep changes unstaged
- `git reset --hard <commit>` → Reset to commit, discard all changes
- `git revert <commit>` → Create a new commit that undoes changes
- `git commit --amend` → Amend the last commit
- `git commit --amend --no-edit` → Amend without changing message

### Advanced Commands
- `git stash` → Stash uncommitted changes
- `git stash pop` → Apply stashed changes
- `git rebase <branch>` → Rebase current branch onto another
- `git cherry-pick <commit>` → Apply changes from a specific commit
- `git reflog` → Show reference log
- `git tag <tag-name>` → Create a tag
- `git blame <file>` → Show who last modified each line
- `git clean -f` → Remove untracked files

## Git Flow

Git Flow is a branching model for managing releases and features:

- Starts with `master` (or `main`)
- `develop` (replica of master → for releases)
- `hotfix` (created from release to send fixes to master)
- `feature` (for new features)

This is a simplified overview. For more details, refer to the [Git Flow documentation](https://nvie.com/posts/a-successful-git-branching-model/).