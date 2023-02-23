import fs from 'fs';
import { ESLintUtils } from "@typescript-eslint/utils";
import HammerTimeCommentRule from "./Comments";
import { MC_HAMMER_COMMENTS } from './Constants';
import { getSpecFiles } from './Helpers';
import path from 'path';

const tester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser",
});

const validSpecFiles = getSpecFiles(path.join('valid', 'comments'));
const invalidSpecFiles = getSpecFiles(path.join('invalid', 'comments'));

tester.run(MC_HAMMER_COMMENTS, HammerTimeCommentRule, {
  valid: validSpecFiles.map(f => fs.readFileSync(f)).map(content => ({
    code: content.toString('utf-8')
  })),
  invalid: invalidSpecFiles.map(f => fs.readFileSync(f)).map(content => ({
    code: content.toString('utf-8'),
    errors: [{ messageId: MC_HAMMER_COMMENTS }],
  }))
});
