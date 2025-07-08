# STEAMER

`A minimalistic streaming backend (built for learning purpose)`

## SETUP TYPESCRIPT WITH NODE

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

## VIDEOS

- [A Deep dive into Node.js Streams](https://youtu.be/edB964-YYpE?si=Uzq9v6LEWAjCWRRW)

## READABLE STREAMS

- All node readable streams are async iterables. And this is is the recommened way to consume them. They can be consumed using :

```javascript

  for await (let chunck of stream) {
    console.log(chunck)
  }

```

- Chunck read from files are by default 64ko size.

## WRITABLE STREAMS

## PIPES AND TRANSFORMERS

- The teacher recommends not to use `readable.pipe` because the error handling is too complex. Instead, use the pipeline because it has got a callback to handle errors. Plus, it has got a lot less buffering than pipe.
- A transformer acts as a middleware for further processing of streams. It thus runs only once. A transformer can be created using the `Transform` class exposed by `node:stream` or it can simply be a generator that receives the source stream as an argument and yields chunks to be processed by later transformers till the stream reaches the writable.

## CONCEPTS

- **High water mark** -> amount of data buffered at each step. Let's say we have a producer and a consumer of data. Between the two, data goe through some transformers. When data reaches each transformer, it's going to be buffered both at the entry and at the exit. So, the amount of data buffered at each step is called, in Node Js, **High water mark**.
- **reading streams on data** : data is read as fast as it can be, without any backpressure. We would have to handle that ourselves.
- **reading streams on readable** : is the more recommended way (performant) but it's the more complicated.

## CAVEATS

- NEVER RETURN A STREAM THROUGH A PROMISE
-
