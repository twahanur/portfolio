import React, { useEffect, useState } from "react";
import "./Experience.css";

const ProgressLine = ({
    label,
    backgroundColor = "#e5e5e5",
    // expected format for visual parts
    visualParts = [
        {
            percentage: "0%",
            color: "white"
        }
    ]
}) => {
    const [widths, setWidths] = useState(
        visualParts.map(() => {
            return 0;
        })
    );
    useEffect(() => {
        // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
        // You need to wrap it to trigger the animation
        requestAnimationFrame(() => {
            setWidths(
                visualParts.map(item => {
                    return item.percentage;
                })
            );
        });
    }, [visualParts]);
    return (
        <>
            <div className="progressLabel">{label}</div>
            <div
                className="progressVisualFull"
                style={{
                    backgroundColor
                }}
            >
                {visualParts.map((item, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: widths[index],
                                // setting the actual color of bar part
                                backgroundColor: item.color
                            }}
                            className="progressVisualPart"
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ProgressLine;