# GitHub Guide Sheet

**By:** Makrious Ayman  
**LinkedIn:** [Makrious Ayman](https://www.linkedin.com/in/makrious-ayman-84985621b/)  
**GitHub:** [Makrious Ayman](https://github.com/MakCoder-2004)

---

## GitHub Basics

### Repository
A **repository** is a folder that contains code, where any changes to the code are tracked by Git.  
To create a repository, create a new folder on your computer, and then run git init

---
### GitHub
**GitHub** is a service that allows you to save your Git repositories online. It helps you:
- Backup your code in case you delete it on your computer.
- See the history of your code changes more easily.

Alternatives to GitHub include **Bitbucket** and **GitLab**.

- **Local repository**: A Git repository saved on your computer.
- **Remote repository**: A Git repository saved online (e.g., on GitHub).

---

## Adding Code to GitHub

| Command                                  | Description                                                                 |
|------------------------------------------|-----------------------------------------------------------------------------|
| `git remote add <remote_name> <url>`     | Link a local repository to a remote repository and name this link.          |
| `git remote`                             | List all remote repositories linked to your local repo.                     |
| `git remote -v`                          | List all remote repositories with more detailed information.                |

---

## Removing Code from GitHub

| Command                                  | Description                                                                 |
|------------------------------------------|-----------------------------------------------------------------------------|
| `git remote remove <remote_name>`        | Removes a link to a remote repository.                                      |

---

## Configuring Username for GitHub Repository

| Command                                                   | Description                                                                 |
|-----------------------------------------------------------|-----------------------------------------------------------------------------|
| `git config --global credential.username <username>`      | Configure your GitHub username for repository access.                       |

---

## Uploading Code from GitHub (Push)

| Command                                                   | Description                                                                 |
|-----------------------------------------------------------|-----------------------------------------------------------------------------|
| `git push <remote_name> <branch>`                         | Upload a branch of your Git version history to your remote repository.      |
| `git push <remote_name> <branch> --set-upstream`          | Sets up a shortcut for the branch and remote repository.                    |
| `git push <remote_name> <branch> -f`                      | Force-push the branch to the remote repository (overwrites remote content). |

---

## Downloading Code from GitHub (Pull)

| Command                                               | Description                                                                |
|-------------------------------------------------------|----------------------------------------------------------------------------|
| `git clone <url>`                                     | Download a remote repository from a URL.                                   |
| `git clone <url> <folder_name>`                       | Download the repository and give it a different folder name.               |
| `git fetch`                                           | Updates all remote tracking branches.                                      |
| `git pull <remote_name> <branch>`                     | Update the local branch with changes from the remote repository (on GitHub).|
| `git pull origin main --set-upstream`                 | Sets up a shortcut for this branch and remote repository.                   |

---

# Steps for Putting a Project Folder to a GitHub Repository

1. **Initialize git in the project** 
```bash 
    git init  
```
2. **Adding the files of the project** 
```bash
    git add . 
```
3. **Creating a commit for the start of the project** 
```bash
    git commit -m "message"
```
4. **Create the repository in your GitHub Account**

5. **Adding the remote to coonect the GitHub repositoty** 
```bash 
    git remote add <remote_name> <url>
```
6.  **Configuring username that uploads to the repository** 
```bash 
    git config --global credential.username <username>
```
7.  **Push the files to the repository**
```bash 
    git push <remote_name> <branch>
```  

---

# Sync Changes From Computer to GitHub :-

1. **Adding the files of the project** 
```bash 
git add .
```
2. **Creating a commit for updating your project code/files** 
```bash
git commit -m "message"
```
3. **Pull any remote changes** 
```bash 
git pull origin <branch>
``` 
4. **Push the files to the repository** 
```bash 
git push <remote_name> <branch>
``` 
**OR as a shortcut use**
```bash 
git push <remote_name> <branch> --set-upstream
``` 
5. **Then you can use `git push` to push the files when the shortcut method is used**
**If any error is encountered you can force push the files using `git push <remote_name> <branch> -f`**

---

# Sync Changes From GitHub to Computer :-

1. **Clone the Repository (First Time Only)**
```bash 
git clone <url>
``` 
2. **Pull the Latest Changes from GitHub**
```bash 
git pull origin <branch>
``` 
---