import { useState } from "react";

// Number of input fields that make up SSN

const useNumbers = (number) => {
  const [numbers, setNumbers] = useState(
    new Array(number).fill(1).reduce((acc, curr, idx) => {
      const key = idx + 1;
      acc[`num-${key}`] = "";
      return acc;
    }, {})
  );
  return {
    handleChange: (e) => {
      const { maxLength, value, name } = e.target;
      const [, fieldIndex] = name.split("-");

      // Check if they hit the max character length
      if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < number) {
          // Get the next input field
          const nextSibling = document.querySelector(
            `input[name=num-${parseInt(fieldIndex, 10) + 1}]`
          );

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }

      setNumbers((v) => ({
        ...v,
        [name]: value,
      }));
    },
    numbers,
  };
};

export default useNumbers;
