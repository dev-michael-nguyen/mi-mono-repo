# mi-mono-repo

## GETTING STARTED

- Install [nvm-windows](https://github.com/coreybutler/nvm-windows) so we can install and use multiple [NodeJs](https://nodejs.org/en/) versions

- Install latest NodeJs version

```npm
nvm install latest
nvm use latest
```

- Install CLI

```npm
npm install -g @nrwl/cli@11.2.1
npm install -g @angular/cli@11.3.0
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
npm run fb:deploy:silo-ngx-doc-app
```
