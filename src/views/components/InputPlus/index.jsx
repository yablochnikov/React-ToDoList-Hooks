import React, { useState } from "react";

import styles from "./index.module.scss";

export const InputPlus = ({ onAdd }) => {
  //   const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.inputPlus}>
      <input
        type='text'
        // value={inputValue}
        className={styles.inputPlusValue}
        placeholder='Type here...'
        // onChange={e => setInputValue(e.target.value)}
      />
      <button
        // onClick={() => {
        //   onAdd(inputValue);
        // }}
        aria-label='Add'
        className={styles.inputPlusButton}
      />
    </div>
  );
};
