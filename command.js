#!/usr/bin/env node
const program = require("commander");
const { sayHello, getProb, getRef, getRepoAnalysis } = require("./index");

program.version("1.0.0").description("Bob hack");

program
  .command("sayhello")
  .alias("hw")
  .description("Say Hello")
  .action(() => {
    sayHello();
  });

program
  .command("getProb <ref_id>")
  .alias("gp")
  .action((ref_id) => {
    getProb(ref_id);
  });

program
  .command("getRef <ref_id>")
  .alias("gr")
  .action((ref_id) => {
    getRef(ref_id);
  });

program
  .command("getRepoAnalysis <repo_id>")
  .alias("gra")
  .action((repo_id) => {
    getRepoAnalysis(repo_id);
  });




  // This is a test addition
  program
  .command("getSingleRepo <ref_id>")
  .alias("gsr")
  .action((ref_id) => {
    getProb(ref_id);
  });


// This is a test addition

program.parse(process.argv);
