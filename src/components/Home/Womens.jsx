import React from "react";
import { Link } from "react-router-dom";
// import { Footer } from "../Footer/Footer";
import "./womens.css";

export const Womens = () => {
  return (
    <div className="container">
      <br />
      <div className="main_img">
        <Link to={"/products"}>
        <img
          src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW16/NensiDojaka_Big_desktop_2x_1_20220414175823.jpg?imwidth=1180&imdensity=1"
          alt="women-img"
        />
        </Link>
      </div>
      <div className="banner1">
        <h4 className="ha4">DON'T MISS OUT</h4>
        <h1 className="ha1">New Arrivals</h1>
        <h5 className="ha5">
        Ancient Greek Sandals, Marni, Balmain, Kenzo...
        </h5>
        <button className="btn-shop">SHOP NOW</button>
      </div>
      <div className="start">
        <div className="left">
          <h4 className="ha4">LA GROTTA AZZURRA" COLLECTION</h4>
          <h1 className="ha1">Exclusively at Mytheresa &amp; Pucci</h1>
          <br />
          <br />
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/Pucci_Eyewear_Act_Tall1_x2_20220428093236.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <br />
          <button
            className="btn-shop"
            style={{ backgroundColor: "black", color: "white" }}
          >
            SHOP NOW
          </button>
        </div>
        <div className="right">
          <h4 className="ha4">NEW HEIGHTS</h4>
          <h1 className="ha1">
            Iconic styles for <br />
            sneakerheads
          </h1>
          <br />
          <br />
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/CW17_ActboxSmall_2x__20220422154021.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <br />
          <button className="btn-shop">SHOP NOW</button>
          <hr></hr>
          <h4 className="ha4">BLUE SKY THINKING</h4>
          <h1 className="ha1">New dresses in fresh colorways</h1>
          <br />
          <br />
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/CW17_ActboxSmall_2x_2_20220422154021.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <br />
          <button className="btn-shop">SHOP NOW</button>
        </div>
      </div>
      <hr></hr>
      <div className="second">
        <div className="left">
          <h4 className="ha4">HANDS-FREE</h4>
          <h1 className="ha1">Crossbody bags to take anywhere</h1>
          <br />
          <br />
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/CW17_ActboxSmall_2x_3_20220422154023.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <br />
          <button className="btn-shop btnnew">SHOP NOW</button>
          <hr></hr>
          <h4 className="ha4 mt">READY FOR WARM WEATHER?</h4>
          <h1 className="ha1">
            Sandals and slides to buy <br /> now
          </h1>
          <br />
          <br />
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/CW17_ActboxSmall_2x_4_20220422154022.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <br />
          <button className="btn-shop btnnew">SHOP NOW</button>
        </div>
        <div className="right">
          <h4 className="ha4">NOW AT MYTHERESA</h4>
          <h1 className="ha1">
            Get a first look at exclusive beachwear styles
          </h1>
          <br />
          <br />
          <img
            src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/CW17_ActboxTall_2x_20220422154035.jpg?imwidth=600&imdensity=1"
            alt=""
          />
          <br />
          <button className="btn-shop">SHOP NOW</button>
        </div>
      </div>
      <div className="third">
        <div>
          <h4 className="ha4">MODERN ROMANCE</h4>
          <h1 className="ha1">A fashion love story</h1>
        </div>
        <div className="third-img">
          <div>
            <img
              className="img1"
              src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/CW17_FE_642x642_2x__20220422160535.jpg"
              alt=""
            />
            <h4 className="ha4">Saint Laurent</h4>
          </div>
          <div>
            <img
              className="img1"
              src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/CW17_FE_642x642_2x_2_20220422160535.jpg"
              alt=""
            />
            <h4 className="ha4">Magda Butrym</h4>
          </div>
          <div>
            <img
              className="img1"
              src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/CW17_FE_642x642_2x_3_20220422160535.jpg"
              alt=""
            />
            <h4 className="ha4">Loewe</h4>
          </div>
          <div>
            <img
              className="img1"
              src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW17/CW17_FE_642x642_2x_4_20220422160535.jpg"
              alt=""
            />
            <h4 className="ha4">Balenciaga</h4>
          </div>
        </div>
        <button className="shop-now">SHOP NOW</button>
        <hr></hr>
      </div>
      <div className="texts-div">
        {/* <h2>Mytheresa – Men’s luxury and designer fashion</h2>
          <p>Mytheresa has organized a collection of designer womenswear items to keep every man looking his best. Each item in our womenswear assortment has been curated and edited by leading experts in men’s fashion. By simply browsing our website, you will discover a luxury shopping experience and find all you need to help you achieve a distinct, well-refined look. We offer fast, worldwide shipping to 130 countries within 72 hours on everything. From the most beloved luxury fashion brands for men, to our highly sought after exclusive womenswear designer collaborations – Mytheresa’s tailored edit is suited to stylish men worldwide.</p>
          <p>Amongst our daily New Arrivals, you will uncover the freshest trends straight off the runway. With Mytheresa’s assortment of designer clothes you are guaranteed to look distinguished and build a sophisticated closet that serves your preferred lifestyle. Discover sharp suiting options by Ermenegildo Zegna for work or opt for an elevated off-duty item from Polo Ralph Lauren. Put your best foot forward in men’s designer shoes from esteemed labels like Prada and Saint Laurent. Not forgetting the perfect finishing touch with classic accessories for men, such as a luxury watch, a classic Burberry scarf or a statement tie. Our buyers have put together the finest selection of iconic styles to help maintain your reputation as a dashing gentleman. A helping hand, our team have carefully selected the perfect designer bags to complete your everyday look.</p> */}
        <section class="text_below">
          <h2 className="ha2">MYTHERESA – MEN’S LUXURY AND DESIGNER FASHION</h2>
          <p className="p-tag">
            Mytheresa has organized a collection of designer womenswear items to
            keep every man looking his best. Each item in our womenswear
            assortment has been curated and edited by leading experts in men’s
            fashion. By simply browsing our website, you will discover a luxury
            shopping experience and find all you need to help you achieve a
            distinct, well-refined look. We offer fast, worldwide shipping to
            130 countries within 72 hours on everything. From the most beloved
            luxury fashion brands for men, to our highly sought after exclusive
            womenswear designer collaborations – Mytheresa’s tailored edit is
            suited to stylish men worldwide.
          </p>
          <p className="p-tag">
            Amongst our daily New Arrivals, you will uncover the freshest trends
            straight off the runway. With Mytheresa’s assortment of designer
            clothes you are guaranteed to look distinguished and build a
            sophisticated closet that serves your preferred lifestyle. Discover
            sharp suiting options by Ermenegildo Zegna for work or opt for an
            elevated off-duty item from Polo Ralph Lauren. Put your best foot
            forward in men’s designer shoes from esteemed labels like Prada and
            Saint Laurent. Not forgetting the perfect finishing touch with
            classic accessories for men, such as a luxury watch, a classic
            Burberry scarf or a statement tie. Our buyers have put together the
            finest selection of iconic styles to help maintain your reputation
            as a dashing gentleman. A helping hand, our team have carefully
            selected the perfect designer bags to complete your everyday look.
          </p>
          <div class="exp_quality">
            <div class="exp">
              <p className="p-tag">A LUXURY SHOPPING EXPERIENCE</p>
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
                  Exclusive designer collaborations and capsule collections that
                  you <br /> won’t find anywhereelse
                </li>
              </ul>
            </div>
            <div class="quality">
              <p className="p-tag">SERVICE AND QUALITY</p>
              <ul>
                <li>Authentic products guaranteed</li>
                <li>
                  Fast, reliable delivery to over 130 countries within 72 hours
                </li>
                <li>Free returns and exchanges within 30 days</li>
                <li>
                  Exceptional customer service available 24 hours a day, 6 days
                  a week in 13 different languages
                </li>
              </ul>
            </div>
          </div>
          <p className="p-tag">
            Mytheresa has a long and rich fashion heritage that spans more than
            30 years. What began in the heart of Munich as a contained local
            boutique offering creations from international designers has now
            grown to become one of the most innovative luxury e-commerce
            companies in the world. Whether you’re paying a visit to our
            Mytheresa Store, browsing from your computer at home, or shopping
            on-the-go via our mobile app, our goal always remains the same: to
            provide the perfect space that caters to all your shopping desires.
          </p>
          <p className="p-tag">
            At Mytheresa we know that stylish men love fashion too and as a
            result, our professional Customer Service team is here to help with
            your order and make sure you are always dressed for success.
          </p>
        </section>
      </div>
      <hr />
      {/* <Footer /> */}
    </div>
  );
};
