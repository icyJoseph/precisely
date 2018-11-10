export function toggleState(key) {
  return this.setState(prev => ({ [key]: !prev[key] }));
}

export const partial = f => (...a) => (...b) => f(...a, ...b);
