import React from "react";
import ContentLoader from "react-content-loader";

export const InfoEventContentLoader = () => {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={540}
                height={320}
                viewBox="0 0 380 520"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="2" y="0" rx="0" ry="0" width="540" height="25" />
                <rect x="0" y="35" rx="0" ry="0" width="540" height="25" />
                <rect x="0" y="150" rx="0" ry="0" width="125" height="25" />
                <rect x="139" y="150" rx="0" ry="0" width="80" height="25" />
                <rect x="-1" y="190" rx="0" ry="0" width="125" height="25" />
                <rect x="140" y="190" rx="0" ry="0" width="78" height="25" />
                <rect x="0" y="70" rx="0" ry="0" width="400" height="25" />
            </ContentLoader>
        </div>
    );
};

export const EventContentLoader = () => {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={540}
                height={351}
                viewBox="0 0 380 520"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="2" ry="2" width="546" height="250" />
                <rect x="0" y="266" rx="2" ry="2" width="546" height="25" />
            </ContentLoader>
        </div>
    );
};
