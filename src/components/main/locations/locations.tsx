import React from "react";
import styles from "./locations.module.css";
import Image from "next/image";

const Locations = () => {
  return (
    <main className={styles.main}>
      <div className={styles.loc}>
        <h5>Locations</h5>
        <div className={styles.loc1}>
          <ul>
            <div className={styles.loc11}>
              <li>
                <div className={styles.loc111}>
                  <Image src="images/pin.svg" alt="" width={15} height={60} />
                  <p>Dubai</p>
                </div>
              </li>
            </div>
            <div className={styles.loc11}>
              <li>
                <div className={styles.loc111}>
                  <Image src="images/pin.svg" alt="" width={15} height={60} />
                  <p>Abu Dhabi</p>
                </div>
              </li>
            </div>
            <div className={styles.loc11}>
              <li>
                <div className={styles.loc111}>
                  <Image src="images/pin.svg" alt="" width={15} height={60} />
                  <p>Sharjah</p>
                </div>
              </li>
            </div>
            <div className={styles.loc11}>
              <li>
                <div className={styles.loc111}>
                  <Image src="images/pin.svg" alt="" width={15} height={60} />
                  <p>Fujairah</p>
                </div>
              </li>
            </div>
            <div className={styles.loc11}>
              <li>
                <div className={styles.loc111}>
                  <Image src="images/pin.svg" alt="" width={15} height={60} />
                  <p>Ras Al Khaimah</p>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Locations;
