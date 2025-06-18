import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
  return (
    <div className="Nav-Container">
      <div className="Logo-Container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="Logo">
          <Link to="/">Crypto World</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item key="Home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="cryptocurrencies" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key="exchange" icon={<MoneyCollectOutlined />}>
          <Link to="/exchange">Exchange</Link>
        </Menu.Item>
        <Menu.Item key="news" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
