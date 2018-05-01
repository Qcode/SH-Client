module.exports = {
	extends: ['airbnb', 'prettier', 'prettier/react'],
	plugins: ['prettier'],
	env: {
		browser: true
	},
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js'] }]
	}
};
