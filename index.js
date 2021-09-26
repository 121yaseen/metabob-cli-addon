const { default: axios } = require("axios");

const sayHello = () => {
  console.log("Hello World");
};

const getProb = (ref_id) => {
  axios
    .get(`https://dev-api.metabob.com/analysis/${ref_id}/problems/`)
    .then((res) => {
      return JSON.stringify(res.data);
    })
    .then((res) => {
      return JSON.parse(res);
    })
    .then((res) => {
      console.log(res.problems);
    });
};

const getSingleRepo = (ref_id) => {
  axios.get(`https://dev-api.metabob.com/repository/${ref_id}`).then((res) => {
    console.log(res);
  });
};

<<<<<<< HEAD
module.exports = {
  sayHello,
  getProb,
  getSingleRepo,
=======
/*
const getRef = (ref_id) => {
  axios
    .get(`https://dev-api.metabob.com/analysis/${ref_id}/refs/`)
    .then((res) => {
      console.log(res);
    });
};
*/


const getRef = (ref_id) => {
  axios
    .get(`https://dev-api.metabob.com/analysis/${ref_id}`)
    .then((res) => {
      console.log(res);
    });
};



const getRepoAnalysis = (repo_id) => {
  axios
    .get(`https://dev-api.metabob.com/repository/${repo_id}/analysis`)
    .then((res) => {
      console.log(res);
    });
};

module.exports = {
  sayHello,
  getProb,
  getRef,
  getRepoAnalysis,
>>>>>>> a061f2de7b8150eec61e2cb26332b19ecb3c5e5a
};
