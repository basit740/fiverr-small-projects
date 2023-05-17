import TopNav from "./components/TopNav/TopNav";
import SecondaryNav from "./components/SecondaryNav/SecondaryNav";
import ProductTitle from "./components/ProductTitle/ProductTitle";
import ProductRating from "./components/ProductRating/ProductRating";
import ProductNav from "./components/ProductNav/ProductNav";
import ProductMain from "./components/ProductMain/ProductMain";
import Footer from "./components/Footer/Footer";

function App() {
  // useEffect to fetch Product data from API
  return (
    <>
      <TopNav />
      <main>
        <SecondaryNav />
        <ProductTitle />
        <ProductRating />
        <ProductNav />
        <ProductMain />
      </main>
      <Footer />
    </>
  );
}

export default App;
