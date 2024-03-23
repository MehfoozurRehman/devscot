'use client'

import { useEffect, useState } from "react";

export default function ClientLayout({ children }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);

    return (
        <>{loading &&
            <div>loading</div>}
            {children}

        </>
    );
};
