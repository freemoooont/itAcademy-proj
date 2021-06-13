import React from "react";
import ContentLoader from 'react-content-loader';

function LoadingCard(){
    return(
        <ContentLoader
            className="col-md-6 col-lg-4 col-sm-12"
            speed={2}
            width={380}
            height={520}
            viewBox="0 0 380 520"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            >
            <rect x="0" y="0" rx="2" ry="2" width="380" height="250" />
            <rect x="20" y="270" rx="2" ry="2" width="35" height="16" />
            <rect x="20" y="295" rx="2" ry="2" width="347" height="20" />
            <rect x="20" y="318" rx="2" ry="2" width="347" height="20" />
            <rect x="20" y="342" rx="2" ry="2" width="275" height="20" />
            <rect x="20" y="372" rx="2" ry="2" width="99" height="18" />
            <rect x="80" y="490" rx="0" ry="0" width="215" height="20" />
        </ContentLoader>
    )
}

export default LoadingCard;
