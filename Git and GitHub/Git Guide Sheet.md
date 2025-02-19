# Git Guide Sheet  
**By:** Makrious Ayman  
**LinkedIn:** [Makrious Ayman](https://www.linkedin.com/in/makrious-ayman-84985621b/) <br>
**GitHub:** [Makrious Ayman](https://github.com/MakCoder-2004)

---

## Basic Commands

- `ls` - List the files and folders in the current folder.
- `cd` - Change directory/folder.
  - Use to navigate to the project folder.

---

## Git Concepts

- **Master Branch**: The latest commit. Always points to the latest commit on the branch.
- **HEAD**: Indicates which commit you are currently viewing.

---

## Creating a Version

| Command               | Description                                      |
|-----------------------|--------------------------------------------------|
| `git init`            | Start tracking all changes in the current folder.|
| `git status`          | Show all changes since the previous commit.      |

---

## Adding Folders and Files

| Command                     | Description                                      |
|-----------------------------|--------------------------------------------------|
| `git add <file\|folder>`    | Pick changes to include in the next commit.      |
| `git add file`              | Pick an individual file.                         |
| `git add folder/`           | Pick all files inside a folder (and subfolders). |
| `git add .`                 | Pick all files in the current directory.         |

---

## Configure Name & Email for Commits

```bash
git config --global user.name "Your Name"
git config --global user.email "email@example.com"  
```

---

## Applying Commits to Added Folders and Files

| Command                           | Description                                      |
|-----------------------------------|--------------------------------------------------|
| `git commit -m "message"`         | Create a commit with a message attached.         |
| `git commit -m "message" --amend` | Update the previous commit instead of creating a new one. |

---

## Viewing Commit History

| Command                     | Description                                      |
|-----------------------------|--------------------------------------------------|
| `git log`                   | View the commit history.                         |
| `git log --all`             | Show all commits (not just the current branch).  |
| `git log --all --graph`     | Show branching visually in the command line.     |

---

## Reset (Unstage Changes)

| Command                     | Description                                      |
|-----------------------------|--------------------------------------------------|
| `git reset <file\|folder>`  | Unstage changes for specific files/folders.      |
| `git reset file`            | Unstage a specific file.                         |
| `git reset folder/`         | Unstage all files in a folder.                   |
| `git reset .`               | Unstage all changes in the current directory.    |

---

## Checkout (Undo Changes)

| Command                          | Description                                      |
|----------------------------------|--------------------------------------------------|
| `git checkout -- <file\|folder>` | Discard changes in specific files/folders.       |
| `git checkout -- file`           | Discard changes in a specific file.              |
| `git checkout -- folder/`        | Discard changes in all files in a folder.        |
| `git checkout -- .`              | Discard all changes in the current directory.    |

---

## Viewing Previous Commits

| Command                                   | Description                                      |
|-------------------------------------------|--------------------------------------------------|
| `git checkout <commit_hash\|branch_name>` | View a previous commit.                          |

---

## Restoring to a Previous Commit

| Command                                      | Description                                      |
|----------------------------------------------|--------------------------------------------------|
| `git checkout <hash\|branch> <file\|folder>` | Restore files to a previous commit.              |
| `git checkout <hash\|branch> file`           | Restore a specific file.                         |
| `git checkout <hash\|branch> folder/`        | Restore all files in a folder.                   |
| `git checkout <hash\|branch> .`              | Restore all files in the project.                |

---

## Remove All Commit History and Start Fresh

```bash
git checkout --orphan new-branch
git add .
git commit -m "Fresh start"
git branch -D master  # Delete old master branch
git branch -m master  # Rename new branch to master
```

---

## Creating a Shortcut

| Command                                        | Description                        |
|------------------------------------------------|------------------------------------|
| `git config --global alias.shortcut <command>` |   Creates an alias (a shortcut)    |
| **Example**                                    |                                    |
| `git config --global alias.s "status"`         |   `git s = git status`             |

---

## Ignore Committing a Specific File

1. Create a file `.gitignore` and specify the files to be ignored by default.
2. Write in the `.gitignore` which files/folders it SHOULD NOT track.

---

## Remove Git from Project

| Command                             | Description                        |
|-------------------------------------|------------------------------------|
| `rm -rf .git`                       | Remove git from project            |
| **OR**                              |                                    |
| `Remove-Item -Recurse -Force .git`  | Remove git from project            |

---

