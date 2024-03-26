"use client";

import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

export default function ClientLayout({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);

    return (
        <>
            {loading && (
                <div
                    className="loadingscreen"
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#000",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 99,
                    }}
                >
                    <GridLoader
                        loading={true}

                        color="#139948" />
                </div>
            )}
            {children}
        </>
    );
}
