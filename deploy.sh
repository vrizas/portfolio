#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'deploy v1.0'
git remote add origin https://github.com/vrizas/vrizas.github.io.git
git branch -m main
git push -f origin main

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:vrizas/vrizas.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:vrizas/vrizas.github.io.git main:gh-pages

cd -