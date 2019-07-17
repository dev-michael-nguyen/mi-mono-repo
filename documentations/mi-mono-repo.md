# mi-mono-repo

This is how this project was created.

## Getting started with [nx](https://nx.dev/angular/getting-started/getting-started)

- Install [nvm-windows](https://github.com/coreybutler/nvm-windows) so we can install and use multiple [NodeJs](https://nodejs.org/en/) versions

- Install latest NodeJs version

```npm
nvm install 10.16.0
nvm use 10.16.0
```

- Install [@angular/cli](https://cli.angular.io/)

```npm
npm install -g @angular/cli
```

- Create nx-workspace

```npm
npm init nx-workspace mi-mono-repo # Create empty nx-workspace
cd mi-mono-repo # Go into our workspace
npm install --dev @nrwl/angular # Adds Angular capabilities
```

- Create application

```ng
ng g @nrwl/angular:application mi-sandbox
```

## Getting started with [firebase](https://firebase.google.com/)

- Install firebase-tools

```npm
npm install -g firebase-tools
```

- Sign into Firebase using Google account

```firebase
firebase login
```

- List all of Firebase projects

```firebase
firebase list
```

- Init firebase

```firebase
firebase init
```
