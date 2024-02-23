const getRandomItem = (items: any[]) => {
  if (!Array.isArray(items)) {
    throw new Error('Invalid input. Please enter an array');
  }

  return items[Math.floor(Math.random() * items.length)];
};

export default getRandomItem;
