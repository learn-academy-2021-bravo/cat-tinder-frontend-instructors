# Getting set up
$ git clone
$ yarn
$ yarn test - uses built in testing suite

`$ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16`

# Test File Structure
### Imports
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

### configuration
Enzyme.configuration({ adapter: new Adapter()})

# Arrange 
set up a situation, shallow redering a component
# Act 
User Interaction
# Assert
expection of the behavior


Syntax for assertions
expect(<actualQueried>),<matcher>(<expected>)

