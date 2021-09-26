const { default: axios } = require("axios");

const sayHello = () => {
  console.log("Hello World");
};

const getRepos = (currPage, pageSize) => {
  axios
    .get("https://dev-api.metabob.com/repositories/", {
      params: {
        current_page: currPage,
        page_size: pageSize,
      },
    })
    .then((res) => {
      console.log(res);
    });
};

module.exports = {
  sayHello,
  getRepos,
};
