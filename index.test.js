import { flat, nested } from './data.js'
import { nest } from './index.js' 

test('nesting', () => {
  expect(nest(flat)).toEqual(nested);
});