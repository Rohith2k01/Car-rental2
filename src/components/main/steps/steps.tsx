import React from "react";
import styles from "./steps.module.css";
import Image from "next/image";

const Steps = () => {
  return (
    <main className={styles.main}>
      <h4 id="rent">Rent/Lease In three easy steps</h4>

      <div className={styles.steps}>
        <div className={styles.step1}>
          <p className={styles.st}>01</p>
          <div className={styles.step11}>
            <Image
              id="s1"
              src="images/pin1.svg"
              alt=""
              width={40}
              height={40}
            />
            <p>
              Select the location. Browse through our available options and find
              the perfect car to suit your needs
            </p>
          </div>
        </div>
        <div className={styles.step1}>
          <p className={styles.st}>02</p>
          <div className={styles.step11}>
            <Image
              id="s1"
              src="images/cal1.svg"
              alt=""
              width={40}
              height={40}
            />
            <p>Choose your desired Pick-Up date and time.</p>
          </div>
        </div>
        <div className={styles.step1}>
          <p className={styles.st}>03</p>
          <div className={styles.step11}>
            <Image id="s1" src="images/car.svg" alt="" width={40} height={40} />
            <p>
              Make payment and book the car. Select an option to either have the
              car delivered to your location or pick it up directly from us.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Steps;
