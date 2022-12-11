import React from 'react';
import {Route} from "react-router-dom";
import {Navigate} from "react-router";
import {useSelector} from "react-redux";

const PrivateRoute = ({component: Component}) => {
    const user = useSelector((state) => state.auth.userData);
  return (
    <Route render = {(...props) => {
        if(user) {
            return <Component {...props} />
        }
        else {
            <Navigate to="/login" />
        }
    }}
    />
  )
}

export default PrivateRoute