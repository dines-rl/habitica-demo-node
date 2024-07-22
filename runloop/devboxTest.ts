import { RLFunc } from "@runloop/runloop";

let gh_token = process.env.GH_TOKEN;

export const useDevbox = RLFunc({
  id: "useDevbox",
  run: async function (request, { systemCoordinator, logger }) {
    logger.info(`TOKEN: ${gh_token}`);
    // write code to log counting up every second for 1000 seconds
    let count = 0;
    while (count++ < 1000) {
      logger.info("Hello World " + count);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    //let devbox = await systemCoordinator.createDevbox(undefined, undefined, [
    //  "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -",
    //  "sudo apt install -y --no-install-recommends nodejs libkrb5-dev",
    //]);
    logger.info("Devbox created: ");

    //await devbox.execTool.exec(
    //  `GH_TOKEN=${gh_token} gh repo clone HabitRPG/habitica ./code -- --depth=1`
    //);
    //await devbox.execTool.exec("cd code && ls -la");
    //await devbox.execTool.exec("cd code && npm i");
    return { Hello: "World" };
  },
});

function myFakeFunction() {
  // Strings
  console.log("Hello");
  console.info("Hello");
  console.warn("Hello");
  console.error("Hello");
  console.debug("Hello");

  // Objects
  console.log({ a: 1 });
  console.info({ a: 1 });
  console.warn({ a: 1 });
  console.error({ a: 1 });
  console.debug({ a: 1 });

  // Multiple mixed args
  console.log("Hello", { a: 1 });
  console.info("Hello", { a: 1 });
  console.warn("Hello", { a: 1 });
  console.error("Hello", { a: 1 });
  console.debug("Hello", { a: 1 });

  // Errors
  console.error("In Error Stream");
  console.error(new Error("Test Error"));
}

const workerNum = Math.floor(Math.random() * 100);
export const example1Add = RLFunc({
  id: "example1Add",
  run: async ({ a, b }) => {
    console.log("3");
    console.log("example1Add called with a=" + a + " b=" + b);
    myFakeFunction();
    return workerNum;
  },
});
