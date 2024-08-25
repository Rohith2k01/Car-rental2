import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

const header = () => {
  function toggleMenu(): void {
    const head = document.getElementById("head1");

    if (head instanceof HTMLElement) {
      if (head.style.display === "flex") {
        head.style.display = "none";
      } else {
        head.style.display = "flex";
      }
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.carrental}>
        <Image id="ca" src="images/cr.svg" alt="" width={500} height={50} />
        <div className={styles.top}>
          <div className={styles.social}>
            <div className={styles.social1}>
              <div className={styles.social11}>
                <a href="">
                  <Image src="images/fb.svg" alt="" width={20} height={20} />
                </a>
              </div>
              <div className={styles.social11}>
                <a href="">
                  <Image src="images/insta.svg" alt="" width={20} height={20} />
                </a>
              </div>
              <div className={styles.social11}>
                <a href="">
                  <Image src="images/x.svg" alt="" width={20} height={20} />
                </a>
              </div>
              <div className={styles.social11}>
                <a href="">
                  <Image src="images/in.svg" alt="" width={20} height={20} />
                </a>
              </div>
            </div>

            <div className={styles.head} id="head1">
              <div className={styles.nav}>
                {" "}
                <a className={styles.top} href="">
                  About
                </a>
              </div>
              <div className={styles.nav}>
                {" "}
                <a className={styles.top} href="">
                  Offers
                </a>
              </div>
              <div className={styles.nav}>
                <a className={styles.top} href="">
                  Corporate
                </a>
              </div>
              <div className={styles.nav}>
                {" "}
                <a className={styles.top} href="">
                  Personal
                </a>
              </div>
              <div className={styles.nav}>
                <a className={styles.top} href="">
                  Locations
                </a>
              </div>
              <div className={styles.nav}>
                {" "}
                <a className={styles.top} href="">
                  Contact Us
                </a>
              </div>
              <div className={styles.nav}>
                {" "}
                <Image
                  id="head2"
                  src="images/profile.svg"
                  alt=""
                  width={100}
                  height={20}
                />
              </div>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
              &#9776;
            </div>

            <div id="note">
              <p>
                Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor
                Grand Sales Counters | All Rates inclusive of VAT. T&C’s apply |
                Follow us on Social Media for New Offers
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
