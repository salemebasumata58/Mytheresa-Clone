import React from "react";
import { Link } from "react-router-dom";
// import products from "../../containers/ProductListing"
// import { Footer } from "../Footer/Footer";
import "./men.css";
import { Slide, Slide2, Slide3 } from "./slide";

export const Men = () => {
  return (
    <div>
      <br />
      <div className="container">
        <div className="banner">
          {/* Belarus Image */}
          <Link to={"/products"}>
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_CW18_2022/BIG1/2x/BIG_1_DESKTOP_2X_1_20220502141248.jpg?imwidth=1180&imdensity=1"
            alt="banner"
          />
          </Link>
          <h1>New Arrivals</h1>
        </div>
        <div className="swiper">
          <Slide />
        </div>
        <div className="btn">
          <button>VIEW ALL</button>
        </div>
        <div className="dual-imge">
          <div className="left1">
            <h1>
              Spring/Summer <br /> 2022
            </h1>
            <p>
              This season's microbags and oversized totes playfully challenge{" "}
              <br /> volume and discretion
            </p>
            <button style={{ left: "11.5%" }}>
              SHOP NOW <span>{">>"}</span>
            </button>
          </div>
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_CW18_2022/BIG2_RTW_DESKTOP_2X_20220429161606.jpg?imwidth=1180&imdensity=1"
            alt=""
          />
        </div>
        <br />
        <div className="swiper">
          <Slide3 />
        </div>
        <div className="btn">
          <button>VIEW ALL</button>
        </div>
        <div className="dual-imge">
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_CW18_2022/BIG_3_DESKTOP_2X_20220503120415.jpg?imwidth=1180&imdensity=1"
            alt=""
          />
          <div className="left1">
            <h1>Just for kicks </h1>
            <p>
              Modernize your sneaker edit with new-in styles from your <br />
              favorite brands
            </p>
            <button style={{ left: "57%" }}>
              SHOP NOW <span>{">>"}</span>
            </button>
          </div>
        </div>
        <br />
        <div className="swiper">
          <Slide2 />
        </div>
        <div className="btn">
          <button>VIEW ALL</button>
        </div>
        <hr />
        <div className="texts-div">
          {/* <h2>Mytheresa – Men’s luxury and designer fashion</h2>
          <p>Mytheresa has organized a collection of designer menswear items to keep every man looking his best. Each item in our menswear assortment has been curated and edited by leading experts in men’s fashion. By simply browsing our website, you will discover a luxury shopping experience and find all you need to help you achieve a distinct, well-refined look. We offer fast, worldwide shipping to 130 countries within 72 hours on everything. From the most beloved luxury fashion brands for men, to our highly sought after exclusive menswear designer collaborations – Mytheresa’s tailored edit is suited to stylish men worldwide.</p>
          <p>Amongst our daily New Arrivals, you will uncover the freshest trends straight off the runway. With Mytheresa’s assortment of designer clothes you are guaranteed to look distinguished and build a sophisticated closet that serves your preferred lifestyle. Discover sharp suiting options by Ermenegildo Zegna for work or opt for an elevated off-duty item from Polo Ralph Lauren. Put your best foot forward in men’s designer shoes from esteemed labels like Prada and Saint Laurent. Not forgetting the perfect finishing touch with classic accessories for men, such as a luxury watch, a classic Burberry scarf or a statement tie. Our buyers have put together the finest selection of iconic styles to help maintain your reputation as a dashing gentleman. A helping hand, our team have carefully selected the perfect designer bags to complete your everyday look.</p> */}
          <section class="text_below">
            <h2>MYTHERESA – MEN’S LUXURY AND DESIGNER FASHION</h2>
            <p>
              Mytheresa has organized a collection of designer menswear items to
              keep every man looking his best. Each item in our menswear
              assortment has been curated and edited by leading experts in men’s
              fashion. By simply browsing our website, you will discover a
              luxury shopping experience and find all you need to help you
              achieve a distinct, well-refined look. We offer fast, worldwide
              shipping to 130 countries within 72 hours on everything. From the
              most beloved luxury fashion brands for men, to our highly sought
              after exclusive menswear designer collaborations – Mytheresa’s
              tailored edit is suited to stylish men worldwide.
            </p>
            <p>
              Amongst our daily New Arrivals, you will uncover the freshest
              trends straight off the runway. With Mytheresa’s assortment of
              designer clothes you are guaranteed to look distinguished and
              build a sophisticated closet that serves your preferred lifestyle.
              Discover sharp suiting options by Ermenegildo Zegna for work or
              opt for an elevated off-duty item from Polo Ralph Lauren. Put your
              best foot forward in men’s designer shoes from esteemed labels
              like Prada and Saint Laurent. Not forgetting the perfect finishing
              touch with classic accessories for men, such as a luxury watch, a
              classic Burberry scarf or a statement tie. Our buyers have put
              together the finest selection of iconic styles to help maintain
              your reputation as a dashing gentleman. A helping hand, our team
              have carefully selected the perfect designer bags to complete your
              everyday look.
            </p>
            <div class="exp_quality">
              <div class="exp">
                <p>A LUXURY SHOPPING EXPERIENCE</p>
                <ul>
                  <li>
                    The finest edit of more than 100 international luxury brands
                  </li>
                  <li>400 new arrivals each week directly from the runway</li>
                  <li>
                    Well-curated selection of items for a boutique-like shopping
                    experience
                  </li>
                  <li>
                    Exclusive designer collaborations and capsule collections
                    that you <br /> won’t find anywhereelse
                  </li>
                </ul>
              </div>
              <div class="quality">
                <p>SERVICE AND QUALITY</p>
                <ul>
                  <li>Authentic products guaranteed</li>
                  <li>
                    Fast, reliable delivery to over 130 countries within 72
                    hours
                  </li>
                  <li>Free returns and exchanges within 30 days</li>
                  <li>
                    Exceptional customer service available 24 hours a day, 6
                    days a week in 13 different languages
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Mytheresa has a long and rich fashion heritage that spans more
              than 30 years. What began in the heart of Munich as a contained
              local boutique offering creations from international designers has
              now grown to become one of the most innovative luxury e-commerce
              companies in the world. Whether you’re paying a visit to our
              Mytheresa Store, browsing from your computer at home, or shopping
              on-the-go via our mobile app, our goal always remains the same: to
              provide the perfect space that caters to all your shopping
              desires.
            </p>
            <p>
              At Mytheresa we know that stylish men love fashion too and as a
              result, our professional Customer Service team is here to help
              with your order and make sure you are always dressed for success.
            </p>
          </section>
        </div>
        {/* Footer */}
        <br />
        <hr />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
