import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import SiderWithRouter from './components/SiderWithRouter';
import { ROUTES } from './constants';

import ScoresScreen from './screens/ScoresScreen';
import BuildMakerScreen from './screens/BuildMakerScreen';
import BuildUpgraderScreen from './screens/BuildUpgraderScreen';
import PartFixerScreen from './screens/PartFixerScreen';
import HistoryScreen from './screens/HistoryScreen';

// Main Style
import './theme/style.scss';
// -------------

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
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
}

export default App;
