import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, startLogout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';;
import LoadingPage from './pages/LoadingPage';


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

setTimeout(() => {
  renderApp();
},1500)




store.subscribe(() => {

  if (store.getState().auth.msg === undefined && store.getState().auth.Role === 2) {
        if (history.location.pathname === '/'  ) {
          history.push('/dashboard');
        }
      } else if(store.getState().auth.msg === undefined && store.getState().auth.Role === 1) {
        if (history.location.pathname === '/'  ) {
          history.push('/DevPage');
        }
       }//else {
      //   // startLogout();
      //   // history.push('/');
      // }
});




// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     //store.dispatch(login(user.uid));
//     renderApp();
//     if (history.location.pathname === '/') {
//       history.push('/dashboard');
//     }
//   } else {
//     //store.dispatch(logout());
//     renderApp();
//     history.push('/');
//   }
// });
