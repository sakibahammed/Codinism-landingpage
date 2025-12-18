module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // new feature
        "fix", // bug fix
        "docs", // documentation
        "style", // formatting, missing semi-colons, etc
        "refactor", // refactoring code
        "perf", // performance improvements
        "test", // adding or updating tests
        "chore", // build process, auxiliary tools, libraries
        "revert", // revert a previous commit
      ],
    ],
    "subject-case": [2, "always", "sentence-case"], // first letter capital
  },
};
