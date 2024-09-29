import React, { memo } from 'react';

const Greets = ({ text, bol }: { text: string; bol: boolean }) => {
    return (
        <div>
            <h1 style={{ color: "white" }} className={bol ? "gradient hero-gradient " : "" + " cursor-pointer text-4xl font-bold text-foreground text-white ease-in rounded-md transition duration-100"}>
                {text}
            </h1>
            <style jsx>{`
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                .hero-gradient {
                    will-change: background-position;
                    font-size: 2rem; /* Adjust the size as needed */
                    font-weight: bold;
                    background: linear-gradient(270deg, #ff0080, #ff8c00, #ffea00, #00ff8c, #00aaff);
                    background-size: 150% 150%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradient 20s ease infinite; /* Adjust duration as needed */
                }
            `}</style>
        </div>
    );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(Greets);
