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
  - That symbol specifies(^, ~) which updates your package accepts, from that dependency.
    Given that using semver (semantic versioning) all versions have 3 digits, the first being the major release, the second the minor release and the third is the patch release.
    You can combine most of the versions in ranges, like this: 1.0.0 || >=1.1.0 <1.2.0, to either use 1.0.0 or one release from 1.1.0 up, but lower than 1.2.0.
The goal of package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers.
