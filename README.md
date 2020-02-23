# mi-mono-repo

## GETTING STARTED

- Install [nvm-windows](https://github.com/coreybutler/nvm-windows) so we can install and use multiple [NodeJs](https://nodejs.org/en/) versions

- Install latest NodeJs version

```npm
nvm install 10.16.0
nvm use 10.16.0
```

- Install CLI

```npm
npm install -g @angular/cli
npm install -g firebase-tools
```

- Setup firebase

```firebase
firebase login        # Sign into Firebase using Google account
firebase use default  # Specify firebase to use default project in .firebaserc
```

## DEVELOP

```npm
npm start
```

## DEPLOYMENT

```npm
npm run fb:deploy:standard-sandbox
```
