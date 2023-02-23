const { ESLintUtils } = require( "@typescript-eslint/utils");
const { MC_HAMMER_FUNCTION_DECLARATION } = require("./Constants");
const { containsMCHammerReferences } = require("./Helpers");

// More info on: https://typescript-eslint.io/custom-rules/#undocumented-rules
module.exports = ESLintUtils.RuleCreator.withoutDocs({
  create(context) {
    return {
        FunctionDeclaration(node) {
          if (containsMCHammerReferences(node.id.name)) {
            context.report({
              messageId: MC_HAMMER_FUNCTION_DECLARATION,
              node,
              data: {
                name: node.id.name
              }
            });
          }
        }
    };
  },
  meta: {
    docs: {
      description: "Function declaration containing MC Hammer references.",
      recommended: "error",
    },
    messages: {
      [MC_HAMMER_FUNCTION_DECLARATION]: "The function declaration should not have references to MC Hammer."
    },
    fixable: "code",
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
