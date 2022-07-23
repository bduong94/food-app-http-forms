import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = value.trim().length === 5;

const Checkout = ({ onClose }) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    const formIsValid = enteredNameIsValid && enteredStreetIsValid;
    enteredCityIsValid && enteredPostalCodeIsValid;

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });
    if (!formIsValid) {
      return;
    }
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Stret</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
