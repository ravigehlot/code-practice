## npm

- Check package dependencies
  - npm list --depth=n
- 
- Check what version of the NPM package is locally installed:
  - npm ls --depth=0

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

- package.json
  - Install patch version:
    - So if you see ~1.0.2 it means to install version 1.0.2 or the latest patch version such as 1.0.4