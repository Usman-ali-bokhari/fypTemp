import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js"; // Ensure this path is correct
import LitRev from "./LitRev";
import Footer from "components/Footer/Footer";
import { Height } from "@mui/icons-material";

export default function LitRevPage() {
    React.useEffect(() => {
        document.body.classList.add("litrev-page");
        return () => document.body.classList.remove("litrev-page");
    }, []);

    return (
        <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="main">
                <img
                        alt="..."
                        className="path"
                        src={require("assets/img/blob.png")}
                        style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
                    />
                    <LitRev />
                </div>
                <Footer />

            </div>
        </>
    );
}
