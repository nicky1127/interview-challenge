export const filterItemsById = (items = [], ids = []) => {
  const result = [];
  ids.forEach(id => {
    const obj = items.find(el => el.id === id);
    result.push(obj);
  });
  return result;
};

export const getNumsOfAllDiets = (items = []) => {
  const result = [];
  items.forEach(item => {
    if (item.dietaries) {
        item.dietaries.forEach(dietary => {
        const obj = result.find(el => el.dietary === dietary);
        if (obj) obj.num++;
        else result.push({ dietary, num: 1 });
      });
    }
  });
  return result;
};
