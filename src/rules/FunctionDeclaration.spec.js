import fs from 'fs';
import { ESLintUtils } from "@typescript-eslint/utils";
import HammerTimeFunctionDeclaration from "./FunctionDeclaration";
import { MC_HAMMER_FUNCTION_DECLARATION } from './Constants';
import { getSpecFiles } from './Helpers';
import path from 'path';

const tester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser",
});

const validSpecFiles = getSpecFiles(path.join('valid', 'functions'));
const invalidSpecFiles = getSpecFiles(path.join('invalid', 'functions'));

tester.run(MC_HAMMER_FUNCTION_DECLARATION, HammerTimeFunctionDeclaration, {
  valid: validSpecFiles.map(f => fs.readFileSync(f)).map(content => ({
    code: content.toString('utf-8')
  })),
  invalid: invalidSpecFiles.map(f => fs.readFileSync(f)).map(content => ({
    code: content.toString('utf-8'),
    errors: [{ messageId: MC_HAMMER_FUNCTION_DECLARATION }],
  }))
});
