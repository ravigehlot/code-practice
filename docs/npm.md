## npm

- Check package dependencies
  - npm list --depth=n

- Update NPM packages
  - npm up

- Re-generate package-lock.json
  - npm i --package-lock-only
  or
  - npm up

- Remove package
  - npm uninstall --save package-name
  - It also removes from package.json
    - and ./node_modules/