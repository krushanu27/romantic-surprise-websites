export const giftsData = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  title: `Gift ${i + 1}`,
  message: "A little something to make you smile. You deserve the world and more!",
  image: `/images/gifts/placeholder-${(i % 5) + 1}.jpg`,
  icon: "Gift"
}));
