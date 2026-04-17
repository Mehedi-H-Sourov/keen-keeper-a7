import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            404 - Page Not Found

            <Link href={"/"}>
                <button className = 'btn'>Go Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;