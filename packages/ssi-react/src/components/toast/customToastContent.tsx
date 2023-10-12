import React, { useState, useEffect } from 'react'
import { HideToastDefaultIcons } from '../../styles/components/toast'

interface Props {
    typeIcon?: React.ReactNode;
    type: string;
    showAge?: boolean;
    showType?: boolean;
    title?: string;
    content?: string;
}

const CustomToastContent: React.FC<Props> = ({ typeIcon, type, showAge, showType, title, content }) => {
    const [creationTime, setCreationTime] = useState<Date>(new Date());
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(() => {
        setCreationTime(new Date());
        const interval = setInterval(() => {
            setElapsedSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval
    }, []);

    const getToastAge = (): string => {
        if (elapsedSeconds < 60) return `${elapsedSeconds} seconds ago`;
        return `${Math.floor(elapsedSeconds / 60)} minutes ago`;
    };

    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
        },
        iconContainer: {
            marginRight: '10px',
        },
    };

    return (
            <>
                <div style={styles.container}>
                    {typeIcon && <HideToastDefaultIcons />}
                    {typeIcon && <div style={styles.iconContainer}>{typeIcon}</div>}

                    <div>
                        {showType && <div>{type}</div>}
                        {showAge && <div>{getToastAge()}</div>}
                        {title && <strong>{title}</strong>}
                        {content && <p>{content}</p>}
                    </div>
                </div>
            </>
    );
}

export default CustomToastContent;
