import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "../../routes";

const Content = (props) => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        {routes.map((route) =>
          route.componet ? (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.componet}
            />
          ) : null
        )}
      </Suspense>
    </Router>
  );
};

const Loading = (props) => {
  return <div>Loading .....</div>;
};

export default Content;
