/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Basics from "views/IndexSections/Basics.js";
import React from "react";
import classnames from "classnames";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  TabContent,
  Input,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

// reactstrap components



export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [iconTabs2, setIconsTabs2] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
    <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <h2 className="">Literature Review</h2>
          </div>
      <Container>
        <div className="title">
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="12" xl="12">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info " role="tablist" tabs>
                  <NavItem >
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1,
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#LitRev"
                    >
                      <i className="tim-icons icon-paper" />
                      Literature Review
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link1"}>
                  <TabPane tabId="link1">
                    <p>
                      Choose your papers and generate a publication ready literature review.
                    </p>
                    <Card>
                      <CardHeader>
                        <Nav className="nav-tabs-info" role="tablist" tabs>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: iconTabs2 === 1,
                              })}
                              onClick={(e) => setIconsTabs2(1)}
                              href="#litrev_upload"
                            >
                              <i className="tim-icons icon-upload" />
                              PDF Upload
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: iconTabs2 === 2,
                              })}
                              onClick={(e) => setIconsTabs2(2)}
                              href="#litrev_reccomendation"
                            >
                              <i className="tim-icons icon-pencil" />
                              Text Input
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>
                      <CardBody>
                        <TabContent className="tab-space" activeTab={"link" + iconTabs2}>
                          <TabPane tabId="link1">
                            <Button
                              component="label"
                              role={undefined}
                              variant="contained"
                              tabIndex={-1}
                              startIcon={<CloudUploadIcon />}
                            >
                              Upload file
                              <VisuallyHiddenInput type="file" />
                            </Button>
                          </TabPane>
                          <TabPane tabId="link2">
                            <p>
                              Input the text of your papers below:
                            </p>
                            <Input defaultValue="" placeholder="Enter your papers here" type="textarea" />
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="title">
        <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <h2 className="">Journal Reccomendation</h2>
          </div>
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="12" xl="12">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info " role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2,
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#JournalRec"
                    >
                      <i className="tim-icons icon-book-bookmark" />
                      Journal Reccomendation
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      Choose your papers and generate a publication ready literature review.
                    </p>
                    <Card>
                      <CardHeader>
                        <Nav className="nav-tabs-info" role="tablist" tabs>
                          
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: iconTabs2 === 2,
                              })}
                              onClick={(e) => setIconsTabs2(2)}
                              href="#litrev_reccomendation"
                            >
                              <i className="tim-icons icon-pencil" />
                              Text Input
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>
                      <CardBody>
                        <TabContent className="tab-space" activeTab={"link" + iconTabs2}>
                          <TabPane tabId="link2">
                            <p>
                              Input the text of your papers below:
                            </p>
                            <Input defaultValue="" placeholder="Enter your papers here" type="textarea" />
                          </TabPane>
                        </TabContent>
                      </CardBody>
                    </Card>
                  </TabPane>
                  <TabPane tabId="link2">
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </p>
                    <Input defaultValue="" placeholder="Enter your papers here" type="textarea" />

                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
