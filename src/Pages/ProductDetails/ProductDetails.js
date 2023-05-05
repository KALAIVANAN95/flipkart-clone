import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../../ProductsData";
import "./ProductDetails.css";

import { FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt, AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCart } from "../../slices/cartSlice";

const ProductDetails = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const product = ProductsData.filter((item) => {
      return item.id.toString() === id;
      // console.log(product,"product")
    });
    setData(product[0]);
  }, [id]);

  const addToCart = () => {
    dispatch(addCart(data));
  };
  return (
    <div className="ProductDetails">
      <div className="ProductDetails-left">
        <div className="otherImgs">
          <img src={data.url} className="proimg" />
          <img src={data.url} className="proimg" />
          <img src={data.url} className="proimg" />
          <img src={data.url} className="proimg" />
        </div>
        <div className="ProductDetail-Img">
          <img src={data.url} alt="" />
          <div className="ProductDetail-btns">
            <button className="ProductDetail-btn" onClick={addToCart}>
              <FaShoppingCart />
              Add to Cart
            </button>
            <button className="ProductDetail-btn">
              <AiFillThunderbolt />
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="ProductDetails-right">
        <p className="ProductName">{data.Product}</p>
        <div className="ratingsreviews">
          <div className="stars">
            {data.rating}
            <AiFillStar />
          </div>
          <div className="ratings">
            {data.reviews} Rating & {data.rating} Reviews
          </div>
        </div>
        <p className="price">₹{data.Sellingprice}</p>
        <p className="packfee">+ ₹69 Secured Packing Fee</p>
        <p className="availableoff">Available offers</p>

        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <div>
            <b>Bank Offer </b>5% Cashback on Flipkart Axis Bank CardT&C
          </div>
        </div>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <div>
            <b>Partner Offer </b> Purchase now & get a surprise cashback coupon
            for January / February 2023Know More
          </div>
        </div>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
            alt=""
            height={20}
          />
          <div>
            <b>Partner Offer </b> Sign up for Flipkart Pay Later and get
            Flipkart Gift Card worth up to ₹500*Know More
          </div>
        </div>
        <div className="offers">
          <img
            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90"
            alt=""
            height={20}
          />
          <div>
            <b> EMI starting </b> from ₹832/monthView Plans{" "}
          </div>
        </div>

        <div className="descriptions">
          <div className="colors">
            <p className="color">Color</p>
            <div className="colorimgs">
              <img src={data.url} alt="" />
              <img src={data.url} alt="" />
              <img src={data.url} alt="" />
            </div>
          </div>
          <div className="highlights">
            <p className="highlight-title">Highlights</p>
            <ul className="highlight">
              <li className="highlight-item">{data.Descripition}</li>
              <li className="highlight-item">{data.Display}</li>
              <li className="highlight-item">{data.Camera}</li>
              <li className="highlight-item">{data.Battery}</li>
              <li className="highlight-item">{data.Proccessor}</li>
            </ul>
          </div>
        </div>

        <div className="RatingsAndReviews">
          <p className="RatingsAndReviews-title">Ratings & Reviews</p>
          <div className="RatingsAndReviews-container">
            <div className="RatingsAndReviews-stars">
              <p className="RatingsAndReviews-reviews">
                {data.rating} <AiFillStar />
              </p>
              <p className="RatingsAndReviews-ratings">
                {data.rating} Ratings & {data.reviews} Reviews
              </p>
            </div>
            <div className="RatingsAndReviews-charts">
              <li>
                <p className="star">5</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">4</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "50%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">3</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "33.6%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">2</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "29.6%" }}></div>
                </div>
              </li>
              <li>
                <p className="star">1</p>
                <div className="bar">
                  <div className="innerbar" style={{ width: "10%" }}></div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
