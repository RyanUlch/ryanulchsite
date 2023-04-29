import Container from "react-bootstrap/Container";

import "./App.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PagePortfolio from "./components/PagePortfolio";
import PageContact from "./components/PageContact";
import PageResume from "./components/PageResume";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function App() {
  return (
    <Container style={{ maxWidth: "850px" }}>
      <Header />
      <Tabs id="PageTabs" defaultActiveKey="resume">
        <Tab eventKey="resume" title="Resume">
          <PageResume />
        </Tab>
        <Tab eventKey="portfolio" title="Portfolio">
          <PagePortfolio />
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <PageContact />
        </Tab>
      </Tabs>
      <Footer />
    </Container>
  );
}
export default App;
