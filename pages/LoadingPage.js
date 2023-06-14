import React from 'react';
import { useEffect } from 'react';

function LoadingPage() {
    useEffect(() => {
        // Add the class when the component is mounted
        document.body.classList.add('loadingPage-body');

        // Remove the class when the component is unmounted
        return () => {
            document.body.classList.remove('loadingPage-body');
        };
    }, []);

    return (
        <div className="loadingPage-boxes">
            <div className="loadingPage-box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="loadingPage-box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="loadingPage-box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="loadingPage-box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default LoadingPage;
