// given a React Class Component
// take the name of a piece of state
// and toggle its value
export function toggleState(key) {
  return this.setState(prev => ({ [key]: !prev[key] }));
}

// take a function
// then take a first group of arguments
// then take a second group of arguments
// return the evaluation of the function with the first and second group
export const partial = f => (...a) => (...b) => f(...a, ...b);

// given a history object, call its push method with route as argument
export const goTo = (history, route) => history.push(route);
