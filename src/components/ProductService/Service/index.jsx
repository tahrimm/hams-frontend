import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useLocation, useNavigate } from "react-router-dom";
import DesignStudio from "./AllService/designStudio";
import ProductsDevelopment from "./AllService/productDevelopment";
import Fabrication from "./AllService/fabrication";
import Cutting from "./AllService/cutting";
import ChestPrint from "./AllService/chestPrint";
import Embroidery from "./AllService/embroidery";
import Garments from "./AllService/garments";
import Wash from "./AllService/wash";
import Accreditation from "./AllService/accreditation";
import UnderGarments from "./AllService/underGarment";
import Etp from "./AllService/effluentTreatment";
// import "./Layout6.css";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("discoverTab") || "designStdio";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (activeTab) {
      window.scrollTo(0, 650);
    }
  }, [initialTab]);

  const handleSelect = (key) => {
    setActiveTab(key);
    const newQueryParams = new URLSearchParams(location.search);
    newQueryParams.set("discoverTab", key);
    navigate({ search: newQueryParams.toString() });
  };

  return (
    <div>
      <Tab.Container
        id="left-tabs-example"
        activeKey={activeTab}
        onSelect={handleSelect}
      >
        <Row>
          <Col sm={3}>
            {/* custon-news  */}
            <Nav variant="pills" className="flex-column custom-button">
              <Nav.Item>
                <Nav.Link className="custon-news" eventKey="designStdio">
                  Design Studio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productdevelopment">
                  Products Development
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fabrication">Fabrication</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cutting">Cutting</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="chestprint">Chest Print</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="embroidery">Embroidery</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="garments">Garments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="wash">Wash</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="accreditation">Accreditation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="undergarments">Under Garments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="etp">Effluent Treatment Plant</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="designStdio">
                <div id="initialTab">
                  <DesignStudio activeKey="designStdio" />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productdevelopment">
                <div id="productdevelopment">
                  <ProductsDevelopment activeKey="productdevelopment" />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="fabrication">
                <Fabrication />
              </Tab.Pane>
              <Tab.Pane eventKey="cutting">
                <Cutting />
              </Tab.Pane>
              <Tab.Pane eventKey="chestprint">
                <ChestPrint />
              </Tab.Pane>
              <Tab.Pane eventKey="embroidery">
                <Embroidery />
              </Tab.Pane>
              <Tab.Pane eventKey="garments">
                <Garments />
              </Tab.Pane>
              <Tab.Pane eventKey="wash">
                <Wash />
              </Tab.Pane>
              <Tab.Pane eventKey="accreditation">
                <Accreditation />
              </Tab.Pane>
              <Tab.Pane eventKey="undergarments">
                <UnderGarments />
              </Tab.Pane>
              <Tab.Pane eventKey="etp">
                <Etp />
                {/* <div id="etp">
                  <Etp activeKey="etp" />
                </div> */}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Index;
