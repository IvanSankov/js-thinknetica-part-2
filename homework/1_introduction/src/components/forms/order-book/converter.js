export default function converter(value, from, to) {
  if (from === to) {
    return value;
  }

  if (from === 'up') {
    return value * 0.9;
  }

  return value * 10 / 9;
}