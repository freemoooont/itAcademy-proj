import React from "react";
import BottomHeader from "./BottomHeader/BottomHeader";
import TopHeader from "./TopHeader/TopHeader";
import FadeInWhenVisible from "../hoc/FadeInWhenVisible";

function MainHeaders(props){
    return(
        <>
            <TopHeader
                scrollToContent={props.scrollToContent}
            />
            <FadeInWhenVisible>
                <BottomHeader/>
            </FadeInWhenVisible>
        </>
    )
}

export default MainHeaders;