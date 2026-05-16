import { MainProduct } from "../components/productpage/MainProduct";
import { ReviewsDetailsFaq } from "../components/productpage/ReviewsDetailsFaq";
import { useParams } from "react-router-dom";
import { useProductById } from "../hooks/useProductById";
import { Recommendation } from "../components/productpage/Recommendation";
export const ProductPage = () => {
  const { id } = useParams();
  const { product } = useProductById(id);
  if (!product.id) return null;
  return (
    <>
      <MainProduct product={product} />
      <ReviewsDetailsFaq product={product} />
      <Recommendation product={product} />
    </>
  );
};
