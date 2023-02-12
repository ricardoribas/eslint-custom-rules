import { ESLintUtils } from "@typescript-eslint/utils";
import HammerTimeRule from "./HammerTimeRule";

const tester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser",
});

tester.run("stop-hammer-time", HammerTimeRule, {
  valid: [
    {
      code: "// this a valid comment",
    },
  ],
  invalid: [
    {
      code: "// stop, hammer time!",
      errors: [{ messageId: "stop-hammer-time" }],
    },
    {
      code: `/*
        stop, hammer time!
        mc hammer!
      */`,
      errors: [{ messageId: "stop-hammer-time" }],
    },
  ],
});
