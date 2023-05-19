import TopNav from "./components/TopNav/TopNav";
import SecondaryNav from "./components/SecondaryNav/SecondaryNav";
import ProductTitle from "./components/ProductTitle/ProductTitle";
import ProductRating from "./components/ProductRating/ProductRating";
import ProductNav from "./components/ProductNav/ProductNav";
import ProductMain from "./components/ProductMain/ProductMain";
import Footer from "./components/Footer/Footer";
// import { FlagIcon }  from '@heroicons/react/24/solid'

function App() {
  // useEffect to fetch Product data from API
  return (
    <>
      {/* <FlagIcon className="h-6 w-6" /> */}
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
