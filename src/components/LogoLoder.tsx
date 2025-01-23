import React from 'react';
interface LogoLoaderProps {
    imageUrl: string;
}

export const LogoLoader: React.FC<LogoLoaderProps> = ({ imageUrl }) => {
    return (
        <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src={imageUrl}
                    alt="Logo"
                    className="w-full h-full object-contain animate-logo-reveal"
                />
            </div>
        </div>
    );
};