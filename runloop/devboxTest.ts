import { RLFunc } from "@runloop/runloop";

let gh_token = process.env.GH_TOKEN;

process.setMaxListeners(200);

export const useDevbox = RLFunc({
  id: "useDevbox",
  run: async function (request, { systemCoordinator, logger }) {
    let num = (request.num as number) || 10;
    const devbox = await systemCoordinator.createDevbox(undefined, {
      name: "readbox",
    });

    await devbox.fileTool.writeFile("test.txt", "Hello World");
    let promises = <Promise<string>[]>[];
    for (let i = 0; i < num; i++) {
      promises.push(devbox.fileTool.readFile("test.txt"));
    }
    await Promise.all(promises);
    return num;
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
