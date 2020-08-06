import React from "react";
import { Route, Redirect } from "react-router-dom";

import MainLayout from "../../pages/_layouts/main";
import { store } from "../../store";

const Routes = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = store.getState().auth;

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

export default Routes;
