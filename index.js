//Time interval

// const cancelButton = document.getElementById("cancle1");
// const timeOutId = setTimeout(() => {
//   window.location.href = "http://www.google.com";
// }, 5000);

// cancelButton.addEventListener("click", () => {
//   clearTimeout(timeOutId);
//   console.log("Aborted the Redirection!!");
// });

//Debnounce📨
function queryAPI() {
  console.log("SEARCH THE API");
  console.log("MAKING AN API REQUEST!!!");
}

// const serchInput = document.querySelector("#search");
// let debounceTimeOut;
// serchInput.addEventListener("input", () => {
//   clearTimeout(debounceTimeOut);
//   debounceTimeOut = setTimeout(() => {
//     queryAPI();
//   }, 400);
// });
const debounceQueryAPI = debounce(queryAPI, 400);
function debounce(callback, delay) {
  let timeOutId;
  return () => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      callback();
    }, delay);
  };
}
const serchInput = document.querySelector("#search");
serchInput.addEventListener("input", () => {
  debounceQueryAPI();
});
