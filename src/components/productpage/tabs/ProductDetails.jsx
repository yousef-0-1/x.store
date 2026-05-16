export const ProductDetails = ({ product }) => {
  return (
    <section>
      <div className="container p-10 bg-[#f0f0f0] rounded-2xl flex flex-col gap-4">
        {[
          { label: "Title", value: product.title },
          { label: "Brand", value: product.brand },
          { label: "Description", value: product.description },
          { label: "Return Policy", value: product.returnPolicy },
          { label: "Category", value: product.category },
          { label: "Width", value: product.dimensions?.width },
          { label: "Height", value: product.dimensions?.height },
        ].map((detail, index) => (
          <p key={index} className="text-xl font-medium">
            <span className="font-bold">{detail.label}: </span>
            {detail.value}
          </p>
        ))}
      </div>
    </section>
  );
};
