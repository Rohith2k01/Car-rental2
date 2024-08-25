import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.f}>
        <Image id="ft" src="images/logo.svg" alt="" width={50} height={80} />

        <div className={styles.ft1}>
          <div className={styles.ftt}>
            <div className={styles.ft11}>
              <p>Home</p>
            </div>
            <div className={styles.ft11}>
              <p>Offers</p>
            </div>
            <div className={styles.ft11}>
              <p>FAQ</p>
            </div>
            <div className={styles.ft11}>
              <p>Carrer</p>
            </div>
            <div className={styles.ft11}>
              <p>About us</p>
            </div>
            <div className={styles.ft11}>
              <p>Locations</p>
            </div>
            <div className={styles.ft11}>
              <p>Privacy policy</p>
            </div>
            <div className={styles.ft11}>
              <p>Terms & Conditions</p>
            </div>
            <div className={styles.ft11}>
              <p>Services</p>
            </div>
            <div className={styles.ft11}>
              <p>Contact Us</p>
            </div>
            <div className={styles.ft11}>
              <p>Service Request</p>
            </div>
            <div className={styles.ft11} id="al">
              <p>Al Habtoor Companies</p>
            </div>
          </div>
          <div className={styles.ft12}>
            <div className={styles.ft121}>
              <p>Hospitality</p>
            </div>
            <div className={styles.ft121}>
              <p>Real Estate</p>
            </div>
            <div className={styles.ft121}>
              <p>Education</p>
            </div>
            <div className={styles.ft121}>
              <p>Publishing</p>
            </div>
            <div className={styles.ft121}>
              <p>Automotive</p>
            </div>
            <div className={styles.ft121}>
              <p>Vechile leasing</p>
            </div>
          </div>
        </div>
        <div className={styles.soc}>
          <p>FOLLOW US ON</p>
          <div className={styles.soc1}>
            <div className={styles.soc11}>
              <a href="">
                <Image src="images/fb1.svg" alt="" width={20} height={20} />
              </a>
            </div>
            <div className={styles.soc11}>
              <a href="">
                <Image src="images/x1.svg" alt="" width={20} height={20} />
              </a>
            </div>
            <div className={styles.soc11}>
              <a href="">
                <Image src="/images/insta1.png" alt="" width={20} height={20} />
              </a>
            </div>
            <div className={styles.soc11}>
              <a href="">
                <Image src="images/ln1.svg" alt="" width={20} height={20} />
              </a>
            </div>
            <div className={styles.soc11}>
              <a href="">
                <Image src="images/yt.svg" alt="" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ft1m}>
        <div className={styles.ftt}>
          <div className={styles.ft11}>
            <p>Home</p>
          </div>
          <div className={styles.ft11}>
            <p>Offers</p>
          </div>
          <div className={styles.ft11}>
            <p>FAQ</p>
          </div>
          <div className={styles.ft11}>
            <p>Carrer</p>
          </div>
          <div className={styles.ft11}>
            <p>About us</p>
          </div>
          <div className={styles.ft11}>
            <p>Locations</p>
          </div>
          <div className={styles.ft11}>
            <p>Privacy policy</p>
          </div>
          <div className={styles.ft11}>
            <p>Terms & Conditions</p>
          </div>
          <div className={styles.ft11}>
            <p>Services</p>
          </div>
          <div className={styles.ft11}>
            <p>Contact Us</p>
          </div>
          <div className={styles.ft11}>
            <p>Service Request</p>
          </div>
          <div className={styles.ft11} id="al">
            <p>Al Habtoor Companies</p>
          </div>
        </div>

        <div className={styles.ft12}>
          <div className={styles.ft121}>
            <p>Hospitality</p>
          </div>
          <div className={styles.ft121}>
            <p>Real Estate</p>
          </div>
          <div className={styles.ft121}>
            <p>Education</p>
          </div>
          <div className={styles.ft121}>
            <p>Publishing</p>
          </div>
          <div className={styles.ft121}>
            <p>Automotive</p>
          </div>
          <div className={styles.ft121}>
            <p>Vehicle leasing</p>
          </div>
        </div>
      </div>
      <p id="foot">© 2018 Car rental LLC - All Rights Reserved. </p>
    </footer>
  );
};

export default footer;
