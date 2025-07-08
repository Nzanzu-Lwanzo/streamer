# STEAMER

`A minimalistic streaming backend`

# SETUP TYPESCRIPT WITH NODE

1. Run `npm install --save-dev typescript ts-node @types/node` to install all the necessary packages.
2. Install **nodemon** as a dev dependency and create a **nodemon.json** file at the root of the project. Inside paste this code, assuming the code is living under `/src` and the entry file is named `script.ts`.

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "npx ts-node ./src/script.ts"
}
```

3. In you `package.json` add the following scripts :

```json
    "scripts" : {
        "dev": "nodemon",
        "start": "node dist/index.js",
        "build": "npx tsc"
    }
```
