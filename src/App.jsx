import { useState } from 'react';
import StartScreen from './components/StartScreen/StartScreen';
import Quiz from './components/Quiz/Quiz';

const App = () => {
    const [isStarted, setIsStarted] = useState(false);

    return (
        <>
            {!isStarted ? (
                <StartScreen onStart={() => setIsStarted(true)} />
            ) : (
                <Quiz />
            )}
        </>
    );
};

export default App;
