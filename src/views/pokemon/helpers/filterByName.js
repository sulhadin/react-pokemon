export const filterByName = (list, name) => {
  if (!Array.isArray(list)) {
    return [];
  }

  const cloneList = [
    ...list,
  ];

  return cloneList.filter((d) => d.name.includes(name));
};
