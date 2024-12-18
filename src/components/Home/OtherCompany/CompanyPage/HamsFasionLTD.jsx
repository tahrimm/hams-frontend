import React from "react";
import CoverHAMSFashion from "../../../../assets/AllAssets/HomePage/OtherCompany/CompanyCover/Hamsfashin.png";
import { FaRegHandPointRight } from "react-icons/fa6";
import "../otherCompany.css";

const HamsFasionLTD = () => {
  return (
    <>
      {/* Cover Image  */}
      <div className="pt-3">
        <img
          className="img-fluid mt-4"
          style={{ height: "500px", width: "100%" }}
          src={CoverHAMSFashion}
          alt="HAMS Fashion Cover Image"
        />
      </div>
      {/* All Information  */}
      <div className="container">
        <div className="row my-3 mx-lg-3 mx-sm-1">
          <div className="d-flex">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 my-auto">
                <h4
                  className="fw-bold"
                  style={{ color: "rgba(255, 97, 0, 1)" }}
                >
                  HAMS Fashion Limited
                </h4>
                <h6 className="fw-bold">
                  HAMS Fashion Limited is a part of the HAMS Group, a renowned
                  conglomerate in the textile and garment industry based in
                  Bangladesh. This include a range of garments such as T-shirts,
                  shirts, dresses, and other fashionable wear. HAMS Fashion
                  Limited plays a crucial role in expanding the product
                  portfolio and contributing to the overall success and growth
                  of the HAMS Group in the fashion sector.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamsFasionLTD;
