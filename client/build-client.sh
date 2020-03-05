#!/bin/sh

rm -rf ../server/public
rm -rf ../server/src/main/resources/reactapp
mkdir -p ../server/src/main/resources/reactapp/js

npm run build
mv build ../server/public
mv ../server/public/index.html ../server/src/main/resources/reactapp
cp ../server/public/static/js/2.*.chunk.js ../server/src/main/resources/reactapp/js/2.chunk.js
cp ../server/public/static/js/main.*.chunk.js ../server/src/main/resources/reactapp/js/main.chunk.js
cp ../server/public/static/js/runtime-main.*.js ../server/src/main/resources/reactapp/js/runtime-main.js
