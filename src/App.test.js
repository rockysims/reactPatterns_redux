import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

test('App component contains element div.App', () => {
	const { container } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const select = container.querySelector.bind(container);
	const appDiv = select('div.App');
	expect(appDiv).not.toBe(null);
});