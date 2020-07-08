// #region Main Imports
import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
// #endregion

// #region Styles
import './theme/style.scss';
// #endregion

// #region Screens
import { ROUTES } from './constants';
import ScoresScreen from './screens/ScoresScreen';
import BuildMakerScreen from './screens/BuildMakerScreen';
import BuildUpgraderScreen from './screens/BuildUpgraderScreen';
import PartFixerScreen from './screens/PartFixerScreen';
import HistoryScreen from './screens/HistoryScreen';
// #endregion

// #region Components
import SiderWithRouter from './components/SiderWithRouter';
const { Content, Footer } = Layout;
// #endregion 

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Layout className="main">
      <SiderWithRouter />
      <Layout className="site-layout">
        <Content className="site-content">
          <Switch>
            <Route exact path={ROUTES.SCORES}   component={ScoresScreen} />
            <Route exact path={ROUTES.MAKER}    component={BuildMakerScreen} />
            <Route exact path={ROUTES.UPGRADER} component={BuildUpgraderScreen} />
            <Route exact path={ROUTES.FIXER}    component={PartFixerScreen} />
            <Route exact path={ROUTES.HISTORY}  component={HistoryScreen} />
            <Redirect from="/" to={ROUTES.SCORES} />
          </Switch>
        </Content>
        <Footer className="site-footer">
          &copy;2020 Created by EokLennon
        </Footer>
      </Layout>
    </Layout>
  </Router>
);

export default App;
