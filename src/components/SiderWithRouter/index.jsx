import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  RadarChartOutlined,
  DesktopOutlined,
  DashboardOutlined,
  SettingOutlined,
  HistoryOutlined
} from '@ant-design/icons';

import { ROUTES } from '../../constants';

import './style.scss';

const { Sider } = Layout;

const SiderWithRouter = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key={ROUTES.SCORES} icon={<RadarChartOutlined />}>
          <Link to={ROUTES.SCORES}>3D Mark Scores</Link>
        </Menu.Item>
        <Menu.Item key={ROUTES.MAKER} icon={<DesktopOutlined />}>
          <Link to={ROUTES.MAKER}>Build Maker</Link>
        </Menu.Item>
        <Menu.Item key={ROUTES.UPGRADER} icon={<DashboardOutlined />}>
          <Link to={ROUTES.UPGRADER}>Build Upgrader</Link>
        </Menu.Item>
        <Menu.Item key={ROUTES.FIXER} icon={<SettingOutlined />}>
          <Link to={ROUTES.FIXER}>Part Fixer</Link>
        </Menu.Item>
        <Menu.Item key={ROUTES.HISTORY} icon={<HistoryOutlined />}>
          <Link to={ROUTES.HISTORY}>History & Saves</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SiderWithRouter;
