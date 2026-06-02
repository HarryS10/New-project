"use client";

import { useEffect, useState } from "react";

type Star = {
    size: number;
    top: number;
    left: number;
    opacity: number;
};

export default function StarField() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generatedStars = Array.from(
            { length: 250 },
            () => ({
                size: Math.random() * 3 + 1,
                top: Math.random() * 100,
                left: Math.random() * 100,
                opacity: Math.random(),
            })
        );

        setStars(generatedStars);
    }, []);

    return (
        <>
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="absolute rounded-full bg-white animate-pulse"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        opacity: star.opacity,
                    }}
                />
            ))}
        </>
    );
}