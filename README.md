Basic React Hello World

Implementation of this [beginner's guide](https://codeburst.io/yet-another-beginners-guide-to-setting-up-a-react-project-part-1-bdc8a29aea22),
with some modifications to make it work.

In that beginner's guide the `bundle.js` is not found.
I changed the `package.json` scripts section to

      "scripts": {
        "start": "webpack -p index.js && webpack-dev-server --progress --mode=development index.js"
      }

Per https://stackoverflow.com/a/43015889, and changed

    <script type="text/javascript" src="bundle.js"></script>

to

    <script type="text/javascript" src="dist/main.js"></script>

in index.html.

After that `yarn start` and browsing to `localhost:8080` works as expected.
