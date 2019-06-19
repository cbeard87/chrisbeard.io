module.exports = {
  linters: {
    '*.+(js|jsx)': ['eslint --fix', 'git add'],
    '*.+(json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)': [
      'prettier --write',
      'git add',
    ],
  },
};
