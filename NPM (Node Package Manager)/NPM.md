# NPM Guide Sheet  
**By:** Makrious Ayman  
**LinkedIn:** [Makrious Ayman](https://www.linkedin.com/in/makrious-ayman-84985621b/) <br>
**GitHub:** [Makrious Ayman](https://github.com/MakCoder-2004)

---
# Most Used npm Commands and Their Usage

## **1. Initializing a Project**
### `npm init`
- Starts a guided process to create a `package.json` file.
- Use `npm init -y` to skip prompts and use default values.

---

## **2. Installing Packages**
### `npm install <package>` (or `npm i <package>`)
- Installs a package locally into `node_modules/`.
- Example:  
  ```sh
  npm install express
  ```

### `npm install <package> -g`
- Installs a package globally (system-wide).
- Example:  
  ```sh
  npm install -g nodemon
  ```

### `npm install`
- Installs all dependencies listed in `package.json`.

### `npm install <package>@<version>`
- Installs a specific version of a package.
- Example:  
  ```sh
  npm install lodash@4.17.21
  ```

### `npm install <package> --save-dev` (or `-D`)
- Installs a package as a development dependency.
- Example:  
  ```sh
  npm install eslint --save-dev
  ```

---

## **3. Uninstalling Packages**
### `npm uninstall <package>` (or `npm remove <package>`)
- Removes a package from `node_modules` and `package.json`.
- Example:  
  ```sh
  npm uninstall express
  ```

### `npm uninstall -g <package>`
- Uninstalls a globally installed package.
- Example:  
  ```sh
  npm uninstall -g nodemon
  ```

---

## **4. Updating Packages**
### `npm update`
- Updates all dependencies to their latest **compatible** versions (respects `package.json` semver rules).

### `npm update <package>`
- Updates a specific package.

### `npm outdated`
- Lists outdated packages in the project.

### `npm install <package>@latest`
- Installs the latest version of a package.

### `npm audit`
- Checks for vulnerabilities in installed packages.

### `npm audit fix`
- Attempts to fix security vulnerabilities automatically.

---

## **5. Running Scripts**
### `npm run <script-name>`
- Runs a script defined in `package.json` under `"scripts"`.
- Example (`package.json` script section):
  ```json
  {
    "scripts": {
      "start": "node server.js",
      "dev": "nodemon server.js"
    }
  }
  ```
  To run the script:
  ```sh
  npm run dev
  ```

### `npm start`
- Shortcut for `npm run start` (if `"start"` is defined in `package.json`).

### `npm test`
- Runs the `test` script in `package.json`.

---

## **6. Managing Dependencies**
### `npm list`
- Displays installed packages.

### `npm list -g`
- Lists globally installed packages.

### `npm ls <package>`
- Checks if a specific package is installed.

### `npm prune`
- Removes unused packages not listed in `package.json`.

---

## **7. Caching and Cleaning**
### `npm cache clean --force`
- Clears the npm cache.

### `npm rebuild`
- Rebuilds installed packages.

---

## **8. Versioning & Publishing**
### `npm version <major|minor|patch>`
- Updates the version number in `package.json`.
- Example:  
  ```sh
  npm version patch  # Increments last number (1.0.0 → 1.0.1)
  ```

### `npm publish`
- Publishes the package to the npm registry (for public/private packages).

### `npm login`
- Logs in to an npm account.

### `npm logout`
- Logs out from npm.

---
