#!/bin/sh

tsc --outFile /app/test.js /app/test.ts
node /app/test.js