# Money Change App

Tech Stack Using React and Redux

### Installation:
```bash
npx create-react-app money-changer

cd money-changer

npm install --save redux react-redux axios
```


### React-Redux Tutorial

1. Create Actions (Status)
    - convertActions.js
    - userActions.js
    - index.js (combineActions)

2. Create Reducers (Function)
    - convertReducer.js
    - userReducer.js
    - index.js (combineReducer)

3. Implement Redux
    - create store.js
    - use store in src/index.js
    - add bootstrap <link> in public/index.html
    - modify App.js using useSelector and useDispatch