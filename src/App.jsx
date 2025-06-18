import { Routes, Link, Route } from "react-router";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./Exports";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Navbar />
      </nav>
      <main className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <footer className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto World <br />
            All Rights Reserved
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              <Link to="/news">News</Link>
            </Space>
          </Typography.Title>
        </footer>
      </main>
    </div>
  );
}

export default App;
