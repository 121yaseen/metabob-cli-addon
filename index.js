const { default: axios } = require("axios");

const sayHello = () => {
  console.log("Hello World");
};

const getProb = (ref_id) => {
  axios
    .get(`https://dev-api.metabob.com/analysis/${ref_id}/problems/`)
    .then((res) => {
      console.log(res);
    });
};

module.exports = {
  sayHello,
  getProb,
};
