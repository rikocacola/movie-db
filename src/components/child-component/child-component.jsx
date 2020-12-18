import React from 'react';

export const ChildComponent = props => (
    <div>
        <button onClick={() => props.greetParent('child')}>
            greet Parent
        </button>
    </div>
)
