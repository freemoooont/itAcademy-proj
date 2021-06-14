import React from "react";
import BottomHeader from "./BottomHeader/BottomHeader";
import TopHeader from "./TopHeader/TopHeader";

function MainHeaders(props){
    return(
        <>
            <TopHeader
                onManClick={props.onManClick}
                scrollToContent={props.scrollToContent}
            />
            <BottomHeader
                onManClick={props.onManClick}
            />
        </>
    )
}

export default MainHeaders;