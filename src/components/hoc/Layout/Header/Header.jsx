import React from "react";
import BottomHeader from "./BottomHeader/BottomHeader";
import TopHeader from "./TopHeader/TopHeader";
import FadeInWhenVisible from "../../FadeInWhenVisible";

function Header(props){

    return(
        <>
            <TopHeader
                scrollToContent={props.scroll}
            />
            <FadeInWhenVisible>
                <BottomHeader/>
             </FadeInWhenVisible>
        </>
    )
}

export default Header
