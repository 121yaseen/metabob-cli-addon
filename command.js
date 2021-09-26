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
  .alias("grs")
  .action(() => {
    getRepos();
  });

// Issue #18 Get details of a single repository
program
  .command("repo <repo_id>")
  .alias("gr <repo_id>")
  .action((repoId) => {
    getRepo(repoId);
  });

program
  .command("prob <ref_id>")
  .alias("gp")
  .action((ref_id) => {
    getProb(ref_id);
  });

// Issue #19 Get refs of a single repo
program
  .command("reporef <ref_id>")
  .alias("rr")
  .action((ref_id) => {
    getRepoRef(ref_id);
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

program.parse(process.argv);
