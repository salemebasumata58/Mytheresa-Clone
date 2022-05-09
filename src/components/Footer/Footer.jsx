import React from "react";
import "./footer.css"

export const Footer = () => {
  return (
    <div>
      <p>SHOP WHENEVER, WHEREVER WITH THE APP</p>
      <div className="service-logo">
        <img
          src="https://in.ewu.edu/dining/wp-content/uploads/sites/33/2020/02/App-Store-Logo_0.png"
          style={{ height: "100px", marginTop: "-2.5%", width: "175px" }}
          alt=""
        />
        <img
          src="https://in.ewu.edu/dining/wp-content/uploads/sites/33/2020/02/en_badge_web_generic.png"
          alt=""
          style={{ height: "84px", width: "160px" }}
        />
      </div>
      <hr />
      <br />
      {/* Footer Starts Here */}
      <div class="service">
        <div>
          <h3>SERVICE & SECURITY</h3>
          <div class="service_1">
            <div>
              <p>Fast delivery</p>
              <p>Delivery within 2 business days</p>
            </div>
          </div>
          {/* <!--  --> */}
          <div class="service_1">
            <div>
              <i class="fa fa-check fa-2x" aria-hidden="true"></i>
            </div>
            <div>
              <p>Free returns within 30 days</p>
              <p>Convenient return service</p>
            </div>
          </div>
          {/* <!--  --> */}
          <div class="service_1">
            <div>
              <i class="fa fa-check fa-2x" aria-hidden="true"></i>
            </div>
            <div>
              <p>Secure payment and data protection</p>
              <p>SSL encryption for secure transactions and personal data</p>
            </div>
          </div>
        </div>

        {/* <!-- 2nd col --> */}
        <div className="second-div">
          <h3>MYTHERESA</h3>
          <p>About us</p>
          <p>Trust & services</p>
          <p>Press</p>
          <p>Careers</p>
          <p>Investor Relations</p>
          <p>Affiliates</p>
        </div>
        {/* <!-- 3rd col --> */}
        <div className="second-div">
          <h3>CUSTOMER SERVICE</h3>
          <p>About us</p>
          <p>Shipping information</p>
          <p>Secure payment</p>
          <p>Exchanges</p>
          <p>Returns</p>
          <p>After sale service</p>
          <p>Gift card</p>
        </div>
        {/* <!-- 4th col --> */}
        <div className="emailSignUp">
          <h3>GET TREND UPDATES, STYLE TIPS AND MORE</h3>
          <div class="input_bar">
            <input type="text" placeholder="Your email address here" />
            <input type="submit" value="Sign Up" />
          </div>
          <div class="policy">
            {/* <input type="checkbox" name="" id="" /> */}
            <p>
              <span>
                <input type="checkbox" />
              </span>{" "}
              I agree that Mytheresa may insert analytical web beacons into the
              newsletter and create a personalized user profile based on my
              purchase and usage behavior, including sending a notification when
              I have placed something in the shopping cart. Further details can
              be found in our Privacy Policy, clause 5. I understand that I can
              revoke my consent at any time by emailing privacy@mytheresa.com.
            </p>
          </div>
          <p>Follow us on</p>
          <div>
            <img
              src="https://miro.medium.com/max/316/1*7tWkKYve2P6vEqxq3WnfUw.png"
              alt="logos"
            />
          </div>
          <div>
            <img src="icons.PNG" alt="" />
          </div>
          <div class="icon">
            <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
            <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
            <i class="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <br />
      <hr />

      {/* <footer>
          <p>copyright © 2006-2022 mytheresa.com</p>
          <div class="term">
            <p>terms of use</p>
            <p>privacy policy</p>
            <p>imprint</p>
          </div>
        </footer> */}
      <div>
        <img
          src="https://miro.medium.com/max/1400/1*7-3NS6O8ymwJy7EJZa4BtA.png"
          alt=""
        />
      </div>
    </div>
  );
};
