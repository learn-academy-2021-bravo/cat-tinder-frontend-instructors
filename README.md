# Cat Tinder!

## Enzyme Notes
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
`Enzyme.configure({ adapter: new Adapter() })`

### Arrange
set up a situation, shallow rendering a component
### Act
User Interaction
### Assert
expectation of the behavior

### Syntax for assertions
`expect(<actualQueried>),<matcher>(<expected>)`



## Cat Tinder Read (Index and Show)

- Refactor some of routes
  - Static routes - they just display the component
  - Dynamic routes - which will change based on input (array of cats)

### Index
- Refactored the route to pass state of cats to index
- Mapped over the array
  - Unique key - cat's id
  - Displayed the cat's name
- Enzyme test to ensure the component mounts
  - Realized we need to conditionally render the array to only map once the data makes it to the component

### Show
- Refactored the route to pass a single cat to show
  - get the id from params
  - find to get just one cat object from the array
  - passed the one cat object
- Displayed all the cat info
- Create links from cat index to cat show using NavLink from react-router-dom
- Enzyme test to ensure the component mounts
  - Realized we need to conditionally render the cat object to only display once the data makes it to the component


## Cat Tinder Create
- Using Reactstrap to create the form and formgroups
- Adding a state object to hold the values
- Adding a handleChange method to take the values from the form
