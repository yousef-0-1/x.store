import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
export const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [topSell, setTopSell] = useState([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const data = await getProducts();
        if (data) {
          const clothesOnly = data.filter((item) =>
            item.category.includes("clothing"),
          );
          const topSelling = clothesOnly.filter((item) => item.rating.rate > 3);
          setTopSell(topSelling);
          setProducts(clothesOnly);
        }
      } catch (error) {
        console.error("Hook Error:", error);
      }
    };
    fetchAllProducts();
  }, []);
  return { products, topSell };
};
