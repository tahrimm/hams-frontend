import "./Layout6.css";
import { Link } from "react-router-dom";
import Masonry from "react-responsive-masonry";
const ProductGalleryCard = ({ product }) => {
  const { id, image, title, description } = product;

  return (
    <div className="col-md-4">
      <div className="p-2">
        <div className="img-wrapper">
          <img
            className="img-thumbnail blur"
            // style={{ width: "390px", height: "400px" }}
            src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
          />
          <div className="content slide-left">
            <div className="text-white">
              <h2>{title}</h2>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p> */}
              <p>{description}</p>
              <Link to={`/product-details/${id}`}>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGalleryCard;
