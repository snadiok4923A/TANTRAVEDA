import { useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Convergence from './components/Convergence';
import Distortion from './components/Distortion';
import Crossing from './components/Crossing';
import Flow from './components/Flow';
import Final from './components/Final';
import NebulaCanvas from './components/NebulaCanvas';

function App() {
  return (
    <>
      <NebulaCanvas />
      <Navigation />
      <div className="content">
        <Hero />
        <Convergence />
        <Distortion />
        <Crossing />
        <Flow />
        <Final />
      </div>
    </>
  );
}

export default App;
