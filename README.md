## Install dependencies
yarn (or npm install)

## Start development server
yarn dev (or npm run dev)

## Run tests
yarn test (or npm run test)


# Approach and Thoughts

1. Install packages: prop-types, redux, redux-thunk
2. Build folder struture for react custom components, redux, helpers and testing
3. Break down code in App.js and refactor them into custom components
4. Build api for retrieving items from the server and store the response in a redux architecture
5. Unit testing for api class
6. Flesh up SideBar and SideBarItem with logics to retrieve items from redux store and dynamically generate SideBarItem array as well as to filter items by the string in the search bar
6. Flesh up MenuPreview and MenuItem with logics to retrieve selectedItemIDs from redux store and dynamically generate MenuItem array
7. Unit testing for react components along with sanpshots
8. Build actions for adding and removing item in redux storage and call these functions in SideBar and MenuPreview components
9. Refactor Header comonent and build filtering functions to calcualting the total numbers of dishes and dietaries
10. Unit testing for Header component
11. Minor changes on css file to apply some styles on the app
