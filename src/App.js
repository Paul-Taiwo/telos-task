import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const AdminLogin = React.lazy(() => import('./views/Pages/AdminLogin'));
const UserLogin = React.lazy(() => import('./views/Pages/UserLogin'));
const Register = React.lazy(() => import('./views/Pages/UserRegister/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const LandingPage = React.lazy(() => import('./views/Pages/LandingPage'));
const TaskPage = React.lazy(() => import('./views/Pages/Task/Task'));

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <UserLogin {...props}/>} />
              <Route exact path="/admin/login" name="Admin Login Page" render={props => <AdminLogin {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/home" name="Home Page" render={props => <TaskPage {...props}/>} />
              <Route path="/admin" name="Home" render={props => <DefaultLayout {...props}/>} />
              <Route path="/" exact name="Home" render={props => <LandingPage {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
