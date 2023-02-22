import fs from 'fs';
import { ESLintUtils } from "@typescript-eslint/utils";
import HammerTimeRule from "./hammer";
import path from 'path';

const tester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser",
});

const isFile = (dir, f) => !fs.lstatSync(path.join(dir, f)).isDirectory();

const rootSpecPath = path.join(__dirname, 'specs');

const getSpecFiles = (folder) => fs.readdirSync(path.join(rootSpecPath, folder))
    .map(f => path.join(rootSpecPath, folder, f))
    .filter(f => !fs.lstatSync(f).isDirectory());

const validSpecFiles = getSpecFiles('valid');
const invalidSpecFiles = getSpecFiles('invalid');

tester.run("stop-hammer-time", HammerTimeRule, {
  valid: validSpecFiles.map(f => fs.readFileSync(f)).map(content => ({
    code: content.toString('utf-8')
  })),
  invalid: invalidSpecFiles.map(f => fs.readFileSync(f)).map(content => ({
    code: content.toString('utf-8'),
    errors: [{ messageId: "stop-hammer-time" }],
  }))
});
