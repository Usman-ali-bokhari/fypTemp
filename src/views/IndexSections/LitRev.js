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
import ReactDOM from 'react-dom';
import { MultipleFileUploadBasic } from './uploadButton.js';
import classnames from "classnames";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextareaAutosize from 'react-textarea-autosize';
import 'assets/css/textarea.css';
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



export default function LitRev() {
    const [iconTabs, setIconsTabs] = React.useState(1);
    return (
        <div className="section section-tabs">
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    paddingTop: "50px",
                    paddingBottom: "50px",
                }}
            >
            </div>
            <Container maxWidth="md">
                <Card>
                    <CardHeader>
                        <Nav className="nav-tabs-info" role="tablist" tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: iconTabs === 1,
                                    })}
                                    onClick={(e) => setIconsTabs(1)}
                                    href="#litrev_upload"
                                >
                                    <i className="tim-icons icon-upload" />
                                    PDF Upload
                                </NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink
                                    className={classnames({
                                        active: iconTabs === 2,
                                    })}
                                    onClick={(e) => setIconsTabs(2)}
                                    href="#litrev_reccomendation"
                                >
                                    <i className="tim-icons icon-pencil" />
                                    Text Input
                                </NavLink>
                            </NavItem> */}
                        </Nav>
                    </CardHeader>
                    <CardBody style={{ minHeight: '400px' }}>
                        <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                            <TabPane tabId="link1">
                                <p>
                                    Input your papers below:
                                </p>
                                <MultipleFileUploadBasic />
                            </TabPane>
                            {/* <TabPane tabId="link2">
                                <p>
                                    Input the text of your papers below:
                                </p>
                                <TextareaAutosize placeholder="Enter paper here" minRows={10} maxRows={30} className="textarea-autosize" />
                            </TabPane> */}
                        </TabContent>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}