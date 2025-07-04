import React from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router";
import millify from "millify";
import { useGetCryptosQuery } from "../services/CryptoApi";
const { Title } = Typography;

const Homepage = () => {
  const { data, error, isLoading } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(error || isLoading ? error : data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
