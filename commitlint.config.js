module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
        parserOpts: {
            headerPattern: /^\[(.*)\] (.+)/,
            headerCorrespondence: ['type', 'subject'],
        },
    },
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'create',
                'add',
                'fix',
                'mod',
                'refactor',
                'merge',
                'migration',
                'docs',
                'test',
                'release',
                'chore',
            ],
        ],
    },
};
