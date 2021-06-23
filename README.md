# Enzyme Notes
$ git clone  
$ yarn  
$ yarn test - uses built in testing suite

`$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`

### Test File Structure
Tests should have the names of the specific item being rendered  
- Header.test.js
- Footer.test.js
- CatIndex.test.js


### Imports
```
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhateverComponent from '../WhateverComponent'
```

### configuration
`Enzyme.configure({ adapter: new Adapter()})`

### Arrange
set up a situation, shallow rendering a component
### Act
User Interaction
### Assert
expectation of the behavior

### Syntax for assertions
`expect(<actualQueried>),<matcher>(<expected>)`
