import test from "node:test";
import assert from "node:assert";

import logger from "node-color-log";
logger.setLevel("success");
logger.setDate(() => new Date().toLocaleTimeString());

import { spinalCase } from "./spinal_case.js";

const appMode = process.env.APP_MODE;

const testSpinalCase = () => {
  test("this-is-spinal-tap", () => {
    assert.strictEqual(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap");
  });
  test("this-is-spinal-tap", () => {
    assert.strictEqual(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap");
  });
  test("the-andy-griffith-show", () => {
    assert.strictEqual(
      spinalCase("the-andy-griffith-show"),
      "the-andy-griffith-show"
    );
  });
  test("teletubbies-say-eh-oh", () => {
    assert.strictEqual(
      spinalCase("Teletubbies say Eh-oh"),
      "teletubbies-say-eh-oh"
    );
  });
  test("all-the-small-things", () => {
    assert.strictEqual(
      spinalCase("AllThe-small Things"),
      "all-the-small-things"
    );
  });
  test.run();
};

const testCaseHandler = (actual, expected) => {
  if (actual === expected) {
    logger.success("actual: ", actual); // this-is-spinal-tap
  } else {
    logger.error("actual: ", actual); // this-is-spinal-tap
    logger.warn("expected: ", expected);
  }
};

const debugTestCases = () => {
  // Debugging
  testCaseHandler(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap");
  testCaseHandler(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap");
  testCaseHandler(
    spinalCase("The_Andy_Griffith_Show"),
    "the-andy-griffith-show"
  );
  testCaseHandler(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh");
  testCaseHandler(spinalCase("AllThe-small Things"), "all-the-small-things");
};

switch (appMode) {
  case "test":
    testSpinalCase();
    break;
  case "dev":
    debugTestCases();
    break;
  default:
    break;
}
