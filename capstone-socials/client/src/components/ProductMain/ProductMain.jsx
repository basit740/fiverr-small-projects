import ProductColumn from "./ProductColumn/ProductColumn";
import ProductDetails from "./ProductDetails/ProductDetails";

function ProductMain() {
    return (
      <section className="flex">
          <ProductColumn />
          <ProductDetails />
      </section>
    );
  }
  
  export default ProductMain;