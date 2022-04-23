source /etc/profile
nvm ls
nvm use 10.13.0
npm install
npm run build
rm -rf dist && mkdir dist
cp -r nga-web/*  ./dist/
