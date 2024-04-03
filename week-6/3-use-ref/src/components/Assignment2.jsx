import React, { useRef, useState } from 'react';

export function Assignment2() {
    const [count, setCount] = useState(0);
    const numberOfTimesReRendered = useRef(0);

    const handleReRender = () => {
        // Update state using functional form of setState
        setCount(prevCount => prevCount + 1);
        // Increment the render count every time the component renders
        numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;
    };


    return (
        <div>
            <p>This component has rendered {numberOfTimesReRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
}
