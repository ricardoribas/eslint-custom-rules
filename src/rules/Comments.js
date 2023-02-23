const { ESLintUtils } = require( "@typescript-eslint/utils");
const { MC_HAMMER_COMMENTS } = require("./Constants");
const { containsMCHammerReferences } = require("./Helpers");

// More info on: https://typescript-eslint.io/custom-rules/#undocumented-rules
module.exports = ESLintUtils.RuleCreator.withoutDocs({
  create(context) {
    return {
      onCodePathEnd(_, node) {
        const comments = node.comments || node.parent.comments || [];

        comments.forEach((c) => {
          if (containsMCHammerReferences(c.value)) {
            context.report({
              messageId: MC_HAMMER_COMMENTS,
              node,
            });
          }
        });
      },
    };
  },
  meta: {
    docs: {
      description: "Comments containing MC Hammer references.",
      recommended: "warn",
    },
    messages: {
      [MC_HAMMER_COMMENTS]: "Remove any reference to MC Hammer",
    },
    fixable: "code",
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
