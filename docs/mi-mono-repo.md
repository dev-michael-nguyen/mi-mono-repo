# Getting start with mi-mono-repo

This is how this project was created.

## Getting started with [nrwl](https://nx.dev/angular/getting-started/getting-started)

- Install [nvm-windows](https://github.com/coreybutler/nvm-windows) so we can install and use multiple [NodeJs](https://nodejs.org/en/) versions

- Install latest NodeJs version

```
nvm install 12.18.2
nvm use 12.18.2
```

- Install @nrwl/cli and [@angular/cli](https://cli.angular.io/)

```
npm install -g @nrwl/cli
npm install -g @angular/cli
```

- Create nx-workspace

```
npx create-nx-workspace@latest  # Create empty nx-workspace
cd mi-mono-repo                 # Go into our workspace
npm install --dev @nrwl/angular # Adds Angular capabilities
```

- Create application

```
ng g @nrwl/angular:application <application-name>
```

## Getting started with [firebase](https://firebase.google.com/)

- Install firebase-tools

```
npm install -g firebase-tools
```

- Sign into Firebase using Google account

```
firebase login
```

- List all of Firebase projects

```
firebase list
```

- Init firebase

```
firebase init
```

# Update mi-mono-repo

## Update nrwl to latest version
```
nx migrate @nrwl/workspace
npm i
nx migrate --run-migration=migrations.json
```

## Update angular to latest version
```
ng update @angular/core @angular/cli
ng update @angular/material
```