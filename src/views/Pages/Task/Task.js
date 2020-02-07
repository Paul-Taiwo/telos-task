import React, { Suspense } from "react";
import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
import { connect, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { isLoaded, isEmpty, useFirebase } from "react-redux-firebase";
import { logOut } from '../../../redux/actions/authAction';

import {
  // Nav,
  // Card,
  // CardBody,
  // Col,
  Container,
  // NavItem,
  // NavLink,
  // Row
} from "reactstrap";

import '../../../containers/DefaultLayout/Layout.css';

// sidebar nav config
import navigation from '../../../_nav-users';
// routes config
import routes from '../../../routes-users';

const DefaultHeader = React.lazy(() => import('../../../containers/DefaultLayout/DefaultHeader'));
const DefaultFooter = React.lazy(() => import('../../../containers/DefaultLayout/DefaultFooter'));


const loading = () => (
  <div className="animated fadeIn pt-1 text-center">Loading...</div>
);

const DefaultAUsersLayout = (props) => {
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);
  const profile = useSelector(state => state.firebase.profile);

  const signOut = async e => {
    e.preventDefault();

    props.signOut();
  };

  // if (!isLoaded(auth) && !isLoaded(profile)) return loading();

  // if (isEmpty(auth)) {
  //   return <Redirect to="/login" />;
  // }

  // if (profile.isAdmin) {
  //   firebase.logout();
  //   return <Redirect to="/login" />;
  // }

  return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={loading()}>
            <DefaultHeader onLogout={(e) => { signOut(e); window.location.reload(); }} />
          </Suspense>
        </AppHeader>

        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav
                navConfig={navigation}
                {...props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>

          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Suspense fallback={loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null;
                  })}
                  <Redirect from="/home" to="/home/tasks" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>

        <AppFooter>
          <Suspense fallback={loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );

}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(logOut())
  };
};

export default connect(null, mapDispatchToProps)(DefaultAUsersLayout);
