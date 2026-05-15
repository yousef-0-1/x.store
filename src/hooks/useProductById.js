import { useEffect, useState } from "react";
import { getProductById } from "../api/products";
export const useProductById = (id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchOneProduct = async () => {
      try {
        const data = await getProductById(id);
        if (data) {
          setProduct(data);
        }
      } catch (error) {
        console.error("Hook Error:", error);
      }
    };
    fetchOneProduct();
  }, [id]);
  return { product };
};
