const dataApi = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
};
const dataApi1 = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 1000);
  });
};

dataApi(5)
  .then((result) => {
    return dataApi1(result + 4);
  })
  .then((response) => {
    console.log(response);
  });
