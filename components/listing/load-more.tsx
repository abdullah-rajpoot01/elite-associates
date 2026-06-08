'use client';

import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface LoadMoreButtonProps {
    className?: string;
    url: string;
    text: string;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
    className = '', text, url
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadMore = async () => {
        if (isLoading) return; // Prevent multiple clicks
        setIsLoading(true);
    };

    useEffect(() => {
        return () => {
            setIsLoading(false);
        }
    }, [])

    return (
        <div className='w-full flex justify-center items-center mt-12'>
            <Link href={url}>
                <Button
                    className={`group ${className} hover:animate-tada hover:animate-iteration-count-once capitalize`}
                    onClick={handleLoadMore}
                    disabled={isLoading}
                >
                    <Loader className={isLoading ? "animate-spin animate-iteration-count-infinite" : ""} />
                    {isLoading ? 'Loading...' : text}
                </Button>
            </Link>
        </div>
    );
};

export default LoadMoreButton;