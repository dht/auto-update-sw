import React from 'react';
import { Container } from './App.style';
import ReloadPrompt from '../ReloadPrompt/ReloadPrompt';

export const App = () => {
    const date = '__DATE__';

    return (
        <Container>
            <h1 className='Home-title'>PWA React!</h1>
            <div className='Home-built'>Built at: {date}</div>
            <ReloadPrompt />
        </Container>
    );
};
