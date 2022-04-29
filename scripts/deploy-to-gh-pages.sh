#!/bin/bash

# Exit with nonzero exit code if anything fails.
set -e

git config --global credential.github.com.interactive always
git config user.name "N1x9d"

git config user.email "nsh19021999@yandex.ru"
git config --global credential.github.com.interactive auto
echo "Start to deploy..."

git checkout --orphan gh-pages
ls -l

git --work-tree ./dist add --all
git --work-tree ./dist commit -m "Deploy to GitHub Pages"
git push -f origin HEAD:gh-pages
rm -r dist

git checkout -f main
git branch -D gh-pages

echo "Successfully deployed"