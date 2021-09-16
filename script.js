function fetchData() {
  fetch('http://jaadu-home.herokuapp.com/node/data').then((response) => {
    console.log(response);
    console.log("asdfasfds");
  });
}
fetchData();
