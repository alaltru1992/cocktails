import React from 'react';
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from 'app';
import {Provider} from 'react-redux';
import {setupStore} from 'configuration/store';

const store = setupStore();

render(
   <Provider store={store}>
       <BrowserRouter>
        <App/>
       </BrowserRouter>
   </Provider>,
   document.getElementById('root')
)