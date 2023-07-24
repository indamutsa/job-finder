const axios = require("axios");

const options = {
  method: "GET",
  url: "https://jsearch.p.rapidapi.com/search",
  params: {
    query: "Python developer in Texas, USA",
    page: "1",
    num_pages: "1",
  },
  headers: {
    "X-RapidAPI-Key": "a24b1b79a9msha1fbff9f0b98c0dp1d4d3cjsnf9e92086b4fd",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

function fetch() {
  console.log("Hello");
  try {
    axios.request(options).then((response) => {
      console.log(response.data.data);
    });
  } catch (error) {
    console.error(error);
  }
}

fetch();
