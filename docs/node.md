## npm

### import vs require()
  - Configuration files such as jest.config.js and 
  - webpack.config.js are all outside of the so 
  - called module. The configuration for those 
  - packages are exported into the module with
  - `module.exports`. So the keyword 'import'
  - does not work outside of a module. For outside,
  - use require() instead.