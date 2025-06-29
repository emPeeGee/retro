module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-exclamation-mark': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        '🎉 init',
        '🥞 feat', // Major feat
        '🍳 feat', // Medium feat
        '🥚 feat', // Minor feat
        '🚧 feat', // WIP feat
        '🐞 fix',
        '📜 docs',
        '👞 style',
        '🪐 refactor',
        '🥕 perf',
        '🧪 test',
        '🍴 build',
        '🛞 ci',
        '🌊 chore',
        '↪️ revert',
      ],
    ],
  },
};
