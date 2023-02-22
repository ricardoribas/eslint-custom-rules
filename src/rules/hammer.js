const { ESLintUtils } = require( "@typescript-eslint/utils");

module.exports = ESLintUtils.RuleCreator.withoutDocs({
  create(context) {
    return {
      onCodePathEnd: function (codePath, node) {
        const { comments } = node;

        comments.forEach((c) => {
          if (c.value.indexOf("hammer") !== -1) {
            context.report({
              messageId: "stop-hammer-time",
              node,
            });
          }
        });
      },
    };
  },
  meta: {
    docs: {
      description: "Comment containing mc hammer references.",
      recommended: "error",
    },
    messages: {
      "stop-hammer-time": "Remove any reference to mc hammer ",
    },
    fixable: "code",
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
});
