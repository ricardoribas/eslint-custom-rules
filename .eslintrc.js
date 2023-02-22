module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@ricardoribas'],
	parserOptions: {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
    root: true,
    rules: {
        'stop-hammer-time': 'error'
    },
};