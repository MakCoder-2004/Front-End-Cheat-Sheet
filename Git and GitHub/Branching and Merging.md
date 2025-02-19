# GitHub Guide Sheet

**By:** Makrious Ayman  
**LinkedIn:** [Makrious Ayman](https://www.linkedin.com/in/makrious-ayman-84985621b/)  
**GitHub:** [Makrious Ayman](https://github.com/MakCoder-2004)

---

## Branching
- Create a copy of the version history that we can work on without affecting the original version history. 
- This lets us work on multiple things (features + fixes) at the same time

### Creating a new branch :-

| Command                          | Description                                                    |
|----------------------------------|----------------------------------------------------------------|
| `git branch <branch_name>`       | Creates a new branch.                                          |
| `git checkout <branch_name>`     | Switch to a different branch and start working on that branch. |
| `git branch -D <branch_name>`    | Deletes a branch.                                              |

< HEAD -> feature1 > 
    - we are currently working on the feature1 branch. 
    - Any new commits will be added to the feature1 branch.

---

## Merging
- Merge the current branch (indicated by HEAD ->) with another branch (<branch_name>).
- Saves the result of the merge as a commit on the current branch.
- Takes the changes of branch one and the changes in branch two and merges them together.

| Command                                 | Description                                                    |
|-----------------------------------------|----------------------------------------------------------------|
| `git merge <branch_name> -m "message"`  | Merge the current branch with another branch (<branch_name>)   |

### Merging Steps :-

1. First switch to the main branch   
    `git checkout main`  
2. Then merge the main branch with the `<branch_name>` branch.   
    `git merge <branch_name> -m "message"`  
3. The result of the merge will be added to main as a commit (a "merge commit")  

---

## Merging Conflicts :-
- A merge conflict occurs when merging branches with changes in the same part of a file.
- The conflict happens because Git doesn’t know what to keep or delete.



### Steps to resolve the conflict :-

1. When a merge conflict occurs, the IDE opens with the conflict issue. 
2. You choose which part to keep and which part to delete.  
3. After resolving the conflict, commit the final changes.  
4. The merge is completed once the commit is made.  

---

## Feature Branch Workflow :-

1. Create a branch for the new feature (called a "feature branch").  
    ```bash
        git branch new-feature
        git checkout new-feature
        # Make some changes to the code...
        git add .
        git commit -m "new feature message"
    ```
2. Upload the feature branch to GitHub.
    ```bash 
        git push origin new-feature
    ```
3. Create a pull request on GitHub  
(a pull request lets teammates do code reviews and add comments).  
![pull request](./images/pull%20request.png)

4. Merge the feature branch into the main branch  
(by opening the pull request in the browser and clicking "Merge pull request")  
![Merge the feature to master](./images/merge%20feature%20branch.png)

1. After merging, update the local repository
(so that it stays in sync with the remote repository on GitHub).
    ```bash
        git fetch
        git checkout main
        git pull origin main
    ```

## Merge conflicts in feature branch workflow :-
- A merge conflict can happen if 2 or more pull requests change the same file and the same line

1. Resolve the merge conflict on GitHub.  
![Merge the feature to master](./images/resolve%20merge%20conflicts.png)

2. Resolve the merge conflict on our computer
    1) Get the latest updates from main
        ```bash
            git checkout main
            git pull origin main
        ```
   2) Get the latest updates from the feature branch.
        ```bash
            git checkout feature4
            git pull origin feature4
        ```
    3) Merge main into the feature branch (feature4).  
    **Notice the direction of the merge:** we want the merge commit to stay on the feature branch so our teammates can review it.
        ```bash
            git checkout feature4
            git merge master
        ```
    4) Push the resolved feature branch to GitHub.  
    ![Merge the feature to master](./images/merge%20feature%20branch.png)

---