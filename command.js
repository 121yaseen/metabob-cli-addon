const program = require("commander");
const { sayHello, getRepos } = require("./index");

program.version("1.0.0").description("Bob hack");

program
  .command("sayhello")
  .alias("hw")
  .description("Say Hello")
  .action(() => {
    sayHello();
  });

program
  .command("getrepos <currpage> <pagesize>")
  .alias("gr")
  .action((currpage, pagesize) => {
    getRepos(currpage, pagesize);
  });

program.parse(process.argv);
