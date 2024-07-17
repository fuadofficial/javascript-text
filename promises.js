// const promise = new Promise((resolve, reject) => {
//   resolve(["fuad", "aju", "basi"]);
//   reject("Api Failed");
// });

const genericFetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

const fetchData = async () => {
  try {
    const value = await genericFetchData(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
