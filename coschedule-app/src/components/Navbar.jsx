import React from "react";
import { Link, Navigation } from "react-router-dom";
import ProductSubMenu from "./ProductSubMenu";
import WhyCoSchedule from "./WhyCoschedule";
import MainSection from "./MainSection";
import Footer from "./Footer";
import Resources from "./Resources";
import "../signup.css"
export default function Navbar() {
    return (
        <>
            <div id="navbar" className="navbar">
                <div className="navbar">
                    <div className="navbar">
                        <img src="data:image/png;base64,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" alt="" />
                        <div className="navbar">
                            <div id="menu-1">
                                <h4>Products</h4>
                                <ProductSubMenu />
                            </div>
                            <div id="menu-2">
                                <h4>Why CoShedule</h4>
                                <WhyCoSchedule />
                            </div>
                            <div id="menu-3">
                                <h4>Resources</h4>
                                <Resources />
                            </div>
                            <div id="menu-4">
                                <h4>Pricing</h4>
                                <Resources />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <Link to="/signup">
                        <h4 id="snp">Sign In</h4>
                    </Link>
                    <h4>Get A Demo</h4>
                    <h4 className="create" style={{ color: "white" }}>Craete My Calculator</h4>
                </div>
            </div>

            {/* mid-section */}
            <MainSection />


            {/* footer */}
            <Footer />

        </>


    )
}