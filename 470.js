const rand7 = () => {
  return Math.floor(Math.random() * 7) + 1;
};
const rand10 = () => {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += rand7();
  }
  console.log(
    '🚀 ~ file: 470.js ~ line 10 ~ rand10 ~  (sum % 10) + 1;',
    (sum % 10) + 1
  );

  return (sum % 10) + 1;
};
rand10();
