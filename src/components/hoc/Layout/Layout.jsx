import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Zoom} from "react-reveal"

function Layout(props){
    return(
        <>
            <Header/>
                <Zoom>
                    {props.children}
                </Zoom>
            <Footer/>
        </>
    )
}

export default Layout