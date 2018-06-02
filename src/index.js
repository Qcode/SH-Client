import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './fonts.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './objects';
import './listeners';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e16d54',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
