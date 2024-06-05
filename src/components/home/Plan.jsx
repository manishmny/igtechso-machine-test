import React from 'react';
import { Tab, Tabs, Nav } from 'react-bootstrap';

const Plan = () => {
    return (
        <>
            <div className="container padding-equal">
                <div className="plan-d default-85">
                    <div className="heading-d text-center mb-5">
                        <span className="title">Pricing Plan</span>
                        <h2 className="sub-heading">Choose your pricing policy</h2>
                    </div>
                    <div className="content-d">
                        <Tabs defaultActiveKey="monthly" id="uncontrolled-tab-example" className="mb-3 border-0 d-flex justify-content-center align-items-center gap-3">
                            <Tab eventKey="monthly" title="Monthly Plan">
                                <div>Content for Home tab</div>
                            </Tab>
                            <Tab eventKey="annual" title="Annual Plan">
                                <div>Content for Profile tab</div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plan