export function toggleState(key) {
  return this.setState(prev => ({ [key]: !prev[key] }));
}
