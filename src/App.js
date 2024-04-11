import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      setCardNumber(value);
    } else {
      setHolderName(value);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.creditCardCon}>
        <div className={styles.leftCon}>
          <div>
            <h1 className={styles.headText}>CREDIT CARD</h1>
          </div>
          <div className={styles.cardCon}>
            {cardNumber && <h1 className={styles.cardValue}>{cardNumber}</h1>}
            <h3 className={styles.cardName}>CARDHOLDER NAME</h3>
            {holderName && <h1 className={styles.cardValue}>{holderName}</h1>}
          </div>
        </div>
        <div className={styles.rightCon}>
          <div>
            <p className={styles.methodText}>PAYMENT METHOD</p>
            <div className={styles.inputsCon}>

            <input
              placeholder="Card Number"
              value={cardNumber}
              type="number"
              name="cardNumber"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              placeholder="Cardholder Name"
              value={holderName}
              name="holderName"
              onChange={(e) => {
                handleChange(e);
              }}
            />

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
