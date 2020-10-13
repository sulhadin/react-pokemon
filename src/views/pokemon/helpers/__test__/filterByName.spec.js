import { filterByName } from '../filterByName';

const pokemon1 = [{ name: 'Pokemon 1' }];

const pokemon2 = [
  { name: 'Pokemon 2' },
  { name: 'Pokemon 2' },
];

const pokemon3 = [
  { name: 'Pokemon 3' },
  { name: 'Pokemon 3' },
];

const pokemon4 = [
  { name: 'Pokemon 4' },
];

const collection = [
  ...pokemon1,
  ...pokemon2,
  ...pokemon3,
  ...pokemon4,
];
const params = [
  {
    filter: collection[0].name,
    result: pokemon1,
  }, {
    filter: collection[1].name,
    result: pokemon2,
  }, {
    filter: collection[3].name,
    result: pokemon3,
  },
];

describe.each`
  value | value2 | expected
  ${collection} | ${params[0].filter}| ${params[0].result}
  ${collection} | ${params[1].filter}| ${params[1].result}
  ${collection} | ${params[2].filter}| ${params[2].result}
  ${null} | ${{}}| ${[]}
  ${undefined} | ${{}}| ${[]}
`('$value', ({ value, value2, expected }) => {
  test(`filterByName returns ${expected}`, () => {
    const list = filterByName(value, value2);
    expect(list).toStrictEqual(expected);
  });
});
