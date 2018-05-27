const isDockerRunning = require("is-docker-running");
const args = process.argv.slice(2);
const chalk = require("chalk");

args.forEach(async containerName => {
    const result = await isDockerRunning.findContainerByName(containerName);
    const moduleName = chalk.blue(containerName);
    if (result) console.log(`${moduleName} is running`);
    else console.log(`${moduleName} is ${chalk.red("not")} running`);
    process.exit(0);
});
