import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
   palette: {
      primary: {
         main: "#ff8f00"
                },
      secondary: {
         main: "#ffcc80"
                 }
            },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}> 
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
