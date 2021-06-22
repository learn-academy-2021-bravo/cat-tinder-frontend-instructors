# Getting set up
$ git clone
$ yarn
$ yarn test - uses built in testing suite

`$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`

# Test Folder Structure
at the same level of the items to be tested creat a new folder called 
`__tests__`
 
 tests should have the names of the specific item being rendered
 ex. Header.test.js
     Footer.test.js
     CatIndex.test.js

# Test File Structure
### Imports
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WhateverComponent from '../WhateverComponent'

### configuration
`Enzyme.configuration({ adapter: new Adapter()})`

# Arrange 
set up a situation, shallow redering a component
# Act 
User Interaction
# Assert
expection of the behavior


### Syntax for assertions
`expect(<actualQueried>),<matcher>(<expected>)`

