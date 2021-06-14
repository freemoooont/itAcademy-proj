import React from 'react';
import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";

const menuData = ["Все", "Активные", "Прошедшие"];

function Nav({onSelectHandle}) {
    const [activeIndex, setActive] = useState(0);

    return (
        <div
            style={{
                display: "flex",
                padding: "1rem 1rem 1rem 0",
                borderRadius: "25px",
            }}
        >
            <AnimateSharedLayout>
                <div
                    style={{
                        width: "100%",
                        height: "4px",
                        position: "absolute",
                        bottom: "+18px",
                        left: "0",
                        backgroundColor: "rgb(192,192,192)"
                    }}/>
                {menuData.map((item, index) => (
                    <MenuItem
                        key={item}
                        item={item}
                        isSelected={activeIndex === index}
                        handleClick={() => {setActive(index); onSelectHandle(item)}}
                        highHandle={onSelectHandle}
                    />
                ))}
            </AnimateSharedLayout>
        </div>
    );
}

export default Nav;

function MenuItem(props) {
    const { item, isSelected, handleClick = Function.prototype } = props;
    return (
        <motion.div
            onClick={handleClick}
            style={{
                padding: "0 0.5rem",
                fontWeight: 900,
                position: "relative",
                cursor: "pointer",
                marginRight: "45px",
            }}
            initial={{ color: "#000" }}
            animate={{ color: isSelected ? "rgb(42,94,232)" : "#000" }}
        >
            {isSelected && <ActiveLine />}
            {item}
        </motion.div>
    );
}

function ActiveLine() {
    return (
        <motion.div
            layoutId="activeItem"
            style={{
                width: "100%",
                height: "4px",
                position: "absolute",
                bottom: "-6px",
                marginLeft: "-0.5rem",
                backgroundColor: "rgb(42,94,232)"
            }}
        />
    );
}