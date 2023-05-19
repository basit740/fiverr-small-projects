import EditionsAddons from "./EditionsAddons/EditionsAddons";
import EpicRatings from "./EpicRatings/EpicRatings";
import FollowUs from "./FollowUs/FollowUs";
import GenresFeatures from "./GenresFeatures/GenresFeatures";
import MediaCarousel from "./MediaCarousel/MediaCarousel";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductTagline from "./ProductTagline/ProductTagline";
import Ratings from "./Ratings/Ratings";
import Specifications from "./Specifications/Specifications";

function ProductColumn() {
    return (
      <div className="w-[826px]">
          <h1>ProductColumn</h1>
          <MediaCarousel />
          <ProductTagline />
          <GenresFeatures />
          <ProductDescription />
          <EditionsAddons />
          <FollowUs />
          <EpicRatings />
          <Ratings />
          <Specifications />
      </div>
    );
  }
  
  export default ProductColumn;