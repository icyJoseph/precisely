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

// reduce over an array and group as Object by id
export const arrayAsObjectById = arr =>
  arr.reduce(
    (prev, { id, ...rest }) => ({ ...prev, [id]: { id, ...rest } }),
    {}
  );

// given a sequence of functions, execute them all!
export const sequence = (...fns) =>
  fns.map(fn => typeof fn == "function" && fn());

// if the button is NOT showing and the scroll is more than 100
// toggle it
// if the button is showing and the scroll is less than 100
// toggle it
// key specifies a value in the state which blocks the use of the toggle
export function useToggleOnScroll(key) {
  const { scrollY } = window;
  const aboveLimit = scrollY > 100;
  const underLimit = scrollY <= 100;
  const {
    toggle,
    state: { [key]: value }
  } = this;

  if (aboveLimit) {
    return !value && toggle();
  } else if (underLimit) {
    return value && toggle();
  }
}
