const BASE_URL = "https://dummyjson.com";

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=0`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};
