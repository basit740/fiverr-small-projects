import ProductColumn from "./ProductColumn/ProductColumn";
import ProductDetails from "./ProductDetails/ProductDetails";

function ProductMain() {
    return (
      <section className="flex w-[1286px] m-auto">
          <ProductColumn />
          <ProductDetails />
      </section>
    );
  }
  
  export default ProductMain;