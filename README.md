# React Hooks with Flow

#### _React Hooks and Flow example repo: Last Update 03/29/2020_

React Hooks with [Flow](https://flow.org/en/)

## Flow
Check code in Flow component. This component has `props` with `TestProps` data type, which requires `str` in string type, `array` in int array type and _optional_ of `num` in number type.
Array will be map through each value when it's rendered.

Run Flow with this code:
```
$ npm run flow
```

## [Hooks](https://reactjs.org/docs/hooks-intro.html)
You can use React Hooks in stateless functional components.
[Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)

### [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
`useState` is a new way to use the exact same capabilities that `this.state` provides in a class. `useState` returns a pair of values, the current state (like `this.state.stateName`) and a function that updates it (like `this.setState`).

### [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
`useEffect` is like React class lifecycle methods of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
By default, it runs both after the first render and after every update.

### [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
`useContext()` is a way to consume data from multiple context. This accepts a context object (the value returns from `React.createContext`) and returns the current context value for the context.

### [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
`useReducer` accepts a reducer of type `(state, action) => newState`, and return the current state paired with a `dispatch` method.


## Installation:
Clone this repo and play with the codes
```
$ git clone https://github.com/misakimichy/react-hooks-with-flow.git
```

## Known Bugs
- No known bugs at this time

## Support and contact details
I welcome any feedbacks and questions to misaki.koonce@gmail.com

## Technologies Used
Git, GitHub, React and Flow

## License
Copyright © 2020 under the MIT License