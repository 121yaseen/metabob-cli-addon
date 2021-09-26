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

// Issue 19 Get refs of a single repository
const getRepoRef = (repoId) => {
  axios
    .get(`https://dev-api.metabob.com/repository/${repoId}/refs`)
    .then((res) => {
      return JSON.stringify(res.data);
    })
    .then((res) => {
      return JSON.parse(res);
    })
    .then((res) => {
      console.log(res);
    });
};

// Issue #16 Get multiple repos without listing repo Ids
const getRepos = () => {
  axios
    .get("https://dev-api.metabob.com/repositories/")
    .then((res) => {
      return JSON.stringify(res.data);
    })
    .then((res) => {
      return JSON.parse(res);
    })
    .then((res) => {
      console.log(res);
    });
};

// Issue #18 Get details of a single repository
const getRepo = (repoId) => {
  axios
    .get(`https://dev-api.metabob.com/repository/${repoId}`)
    .then((res) => {
      return JSON.stringify(res.data);
    })
    .then((res) => {
      return JSON.parse(res);
    })
    .then((res) => {
      console.log(res);
    });
};

// Issue #21 Get analysis of individual repo
const getRepoAnalysis = (repoId) => {
  axios
    .get(`https://dev-api.metabob.com/repository/${repoId}/analysis`)
    .then((res) => {
      return JSON.stringify(res.data);
    })
    .then((res) => {
      return JSON.parse(res);
    })
    .then((res) => {
      console.log(res);
    });
};

// Issue #22 Get analysis of individual ref
const getRef = (refId) => {
  axios
    .get(`https://dev-api.metabob.com/analysis/${refId}`)
    .then((res) => {
      return JSON.stringify(res.data);
    })
    .then((res) => {
      return JSON.parse(res);
    })
    .then((res) => {
      console.log(res);
    });
};

// Issue #23 Get the problems ( [] ) of individual refs
const getProblems = (refId) => {
  axios
    .get(` https://dev-api.metabob.com/analysis/${refId}/problems/`)
    .then((res) => {
      return JSON.stringify(res.data);
    })
    .then((res) => {
      return JSON.parse(res);
    })
    .then((res) => {
      console.log(res);
    });
};

module.exports = {
  sayHello,
  getProb,
  getSingleRepo,
  getRepoRef,
  getRepoAnalysis,
  getRepos,
  getRepo,
  getRef,
  getProblems,
};
