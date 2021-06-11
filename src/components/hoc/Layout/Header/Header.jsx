import React from "react";
import BottomHeader from "./BottomHeader/BottomHeader";
import TopHeader from "./TopHeader/TopHeader";
import FadeInWhenVisible from "../../FadeInWhenVisible";

function Header(){

    return(
        <>
            <TopHeader/>
            <FadeInWhenVisible>
                <BottomHeader/>
             </FadeInWhenVisible>
        </>
    )
}

export default Header
