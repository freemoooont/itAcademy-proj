import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout(props){
    return(
        <>
            <Header/>
                <div className={props.ebator? `ebator`:null}>
                    {props.children}
                </div>
            <Footer/>
        </>
    )
}

export default Layout