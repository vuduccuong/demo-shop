const DATA_DUMMY = new Array(10).fill(0).map((item, index) => {
  return {
    id: index,
    productName: `Sản phẩm ${index}`,
    productWish: false,
    productPrice: index + 1,
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget ante ligula. Donec sit amet sollicitudin odio. Nam urna turpis, sodales vitae orci ut, porttitor pellentesque nisl. Phasellus vehicula, lacus vitae volutpat molestie, turpis mi lacinia neque, id scelerisque lectus neque sed libero",
  };
});

export const getAll = () => {
  return DATA_DUMMY;
};

export const getWishList = () => {
  return DATA_DUMMY.filter((item) => item.productWish);
};

export const addWishList = (id) => {
  const indexProduct = DATA_DUMMY.findIndex((data) => data.id === id);
  DATA_DUMMY[indexProduct] = { ...DATA_DUMMY[indexProduct], productWish: !DATA_DUMMY[indexProduct].productWish };
  console.log(DATA_DUMMY[indexProduct]);
};
