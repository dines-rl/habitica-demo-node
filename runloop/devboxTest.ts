import { RLFunc } from "@runloop/runloop";

let gh_token = process.env.GH_TOKEN;

export const useDevbox = RLFunc({
  id: "useDevbox",
  run: async function (request, { systemCoordinator, logger }) {
    logger.info(`TOKEN: ${gh_token}`);
    //let devbox = await systemCoordinator.createDevbox(undefined, undefined, [
    //  "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -",
    //  "sudo apt install -y --no-install-recommends nodejs libkrb5-dev",
    //]);
    logger.info("Devbox created: ", devbox.id);

    //await devbox.execTool.exec(
    //  `GH_TOKEN=${gh_token} gh repo clone HabitRPG/habitica ./code -- --depth=1`
    //);
    //await devbox.execTool.exec("cd code && ls -la");
    //await devbox.execTool.exec("cd code && npm i");

    logger.info("File tools Create");
    //await devbox.fileTool.createFile("test.txt", "Hello World");

    logger.info("File tools read");
    //let readResult = await devbox.fileTool.readFile("test.txt");

    logger.info(`File Read result: ${readResult}`);
    //let result = await devbox.execTool.exec("cd code && npm run lint");
    logger.info(`Lint result${result.stdout}`);

    return { "readresult:": readResult, lintResult: result.stdout };
  },
});
