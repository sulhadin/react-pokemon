/**
 * Filters pokemon by given name.
 *
 * @param {[]} list Pokemon list to be filtered.
 * @param {string} name Pokemon name.
 * @return {*[]}
 */
export const filterByName = (list, name) => {
  if (!Array.isArray(list)) {
    return [];
  }

  const cloneList = [
    ...list,
  ];

  return cloneList.filter((d) => d.name.includes(name));
};
