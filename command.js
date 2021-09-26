#!/usr/bin/env node
const program = require("commander");
const {
  sayHello,
  getProb,
  getRepoRef,
  getRepoAnalysis,
  getRepos,
  getRepo,
  getRef,
  getProblems,
  getRepoByName,
  getProblem,
} = require("./index");

program.version("1.0.0").description("Bob hack");

program
  .command("sayhello")
  .alias("hw")
  .description("Say Hello")
  .action(() => {
    sayHello();
  });

// Issue #16 Get multiple repos without listing repo Ids
program
  .command("repos")
  .alias("rs")
  .action(() => {
    getRepos();
  });

// Adding getRepoByName
program
  .command("getrepobyname <repo_name>")
  .alias("rn <repo_name>")
  .action((repoName) => {
    getRepoByName(repoName);
  });

// Issue #18 Get details of a single repository
program
  .command("repo <repo_id>")
  .alias("gr <repo_id>") // For some weird reason gr isn't working
  .action((repoId) => {
    getRepo(repoId);
  });

// Issue #19 Get refs of a single repo
program
  .command("reporef <repo_id>")
  .alias("rr")
  .action((repo_id) => {
    getRepoRef(repo_id);
  });

// Issue #21 Get analysis of individual repo
program
  .command("repoanalysis <repo_id>")
  .alias("ra")
  .action((repo_id) => {
    getRepoAnalysis(repo_id);
  });

// Issue #22 Get analysis of individual ref
program
  .command("ref <ref_id>")
  .alias("r")
  .action((ref_id) => {
    getRef(ref_id);
  });

// Issue #23 Get the problems ( [] ) of individual refs
program.command("problems <ref_id>").action((ref_id) => {
  getProblems(ref_id);
});


// Issue #34 
program.command("problem <ref_id> <name>").action((ref_id, name) => {
  getProblem(ref_id, name);
});



program.parse(process.argv);
