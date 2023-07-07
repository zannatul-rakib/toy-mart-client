const setDataToLS = (id) => {
  let toyCart = getDataFromLS();
  const quantity = toyCart[id];
  if (!quantity) {
    toyCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    toyCart[id] = newQuantity;
  }
  localStorage.setItem("toy-cart", JSON.stringify(toyCart));
};

const getDataFromLS = () => {
  let toyCart = {};
  const storedCart = localStorage.getItem("toy-cart");
  if (storedCart) {
    toyCart = JSON.parse(storedCart);
  }
  return toyCart;
};

const removeDataFromLS = (id) => {
  const toyCart = getDataFromLS();
  if (id in toyCart) {
    delete toyCart[id];
    localStorage.setItem("toy-cart", JSON.stringify(toyCart));
  }
};

const deleteCart = () => {
  localStorage.removeItem("toy-cart");
};

export { setDataToLS, getDataFromLS, removeDataFromLS, deleteCart };
