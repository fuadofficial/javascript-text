console.log("Start");

const dataApi = (callback) => {
  setTimeout(() => {
    callback("fuad");
  }, 3000);
};

dataApi((value) => {
  console.log(value);
});

console.log("Finish");
