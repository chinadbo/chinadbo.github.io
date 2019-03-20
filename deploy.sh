# 构建
yarn build

cd dist

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:chinadbo/chinadbo.github.io.git master
