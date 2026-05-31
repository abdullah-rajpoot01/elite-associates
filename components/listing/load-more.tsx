'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ButtonNeon from '../ui/neon-button';
import { Loader } from 'lucide-react';
import Link from 'next/link';

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
                <ButtonNeon
                    className={`group ${className} hover:animate-tada hover:animate-iteration-count-once capitalize`}
                    onClick={handleLoadMore}
                    disabled={isLoading}
                >
                    <Loader className={isLoading ? "animate-spin animate-iteration-count-infinite" : ""} />
                    {isLoading ? 'Loading...' : text}
                </ButtonNeon>
            </Link>
        </div>
    );
};

export default LoadMoreButton;