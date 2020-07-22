import React from 'react';
import { renderRoutes } from 'react-router-config';

const Layout = ({ route }) => <React.Fragment>{renderRoutes(route.routes)}</React.Fragment>

export default Layout