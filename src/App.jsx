import { useEffect } from 'react';
import { RouterProvider, useRouter } from './router/Router';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Convergence from './components/Convergence';
import Distortion from './components/Distortion';
import Crossing from './components/Crossing';
import Flow from './components/Flow';
import Final from './components/Final';
import NebulaCanvas from './components/NebulaCanvas';
import ExplorePage from './components/explore/ExplorePage';
import CategoryPage from './components/explore/CategoryPage';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function MainApp() {
  const { currentPath } = useRouter();

  // Refresh GSAP ScrollTrigger whenever the route updates
  useEffect(() => {
    // Slight timeout allows the newly rendered route DOM to measure correctly
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [currentPath]);

  // Route matching
  const isHome = currentPath === '/' || currentPath === '';
  const isExplore = currentPath === '/start';
  const isCategory = currentPath.startsWith('/start/');
  const categoryId = isCategory ? currentPath.replace('/start/', '').split('/')[0] : '';

  return (
    <>
      <NebulaCanvas />
      {isHome && <Navigation />}

      {isHome && (
        <div className="content">
          <Hero />
          <Convergence />
          <Distortion />
          <Crossing />
          <Flow />
          <Final />
        </div>
      )}

      {isExplore && <ExplorePage />}

      {isCategory && <CategoryPage categoryId={categoryId} />}

      {/* Fallback if user navigates to an unexpected subpath */}
      {!isHome && !isExplore && !isCategory && <ExplorePage />}
    </>
  );
}

function App() {
  return (
    <RouterProvider>
      <MainApp />
    </RouterProvider>
  );
}

export default App;
