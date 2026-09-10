import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext(null);

// Detect the base URL configured in vite.config.js (e.g. '/TANTRAVEDA/' or '/')
const rawBase = import.meta.env.BASE_URL || '/';
export const BASE_URL = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

// Normalizes full window pathname into a clean app route.
// Handles hash-based routes.
export function normalizePath(fullPath) {
  let path = fullPath || '/';

  // Handle hash-based routes if present
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    path = window.location.hash.slice(1); // remove leading '#'
  } else if (BASE_URL !== '/' && path.startsWith(BASE_URL)) {
    path = path.slice(BASE_URL.length - 1);
  }

  // Strip trailing slash if not root
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  return path || '/';
}

// Converts a clean app route into the full URL path with base prefix and hash.
export function toFullPath(appRoute) {
  const route = appRoute.startsWith('/') ? appRoute : `/${appRoute}`;
  return `${BASE_URL}#${route}`;
}

// RouterProvider component
export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handleLocationChange = () => {
      const nextPath = normalizePath(window.location.pathname);
      setCurrentPath(nextPath);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleLocationChange);
    // initial call
    handleLocationChange();
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const navigate = useCallback((to, options = {}) => {
    const targetPath = to.startsWith('/') ? to : `/${to}`;
    const fullTarget = `#${targetPath}`; // hash part only
    if (options.replace) {
      window.location.replace(fullTarget);
    } else {
      window.location.hash = fullTarget;
    }
    setCurrentPath(targetPath);
    if (!options.preventScrollReset) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate, baseUrl: BASE_URL }}>
      {children}
    </RouterContext.Provider>
  );
}

// Hooks
export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export function useNavigate() {
  const { navigate } = useRouter();
  return navigate;
}

export function useLocation() {
  const { currentPath } = useRouter();
  return { pathname: currentPath };
}

// Link component
export function Link({ to, children, className = '', style = {}, onClick, ...rest }) {
  const { navigate, currentPath } = useRouter();
  const isActive = currentPath === to;

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a
      href={toFullPath(to)}
      onClick={handleClick}
      className={`${className} ${isActive ? 'active' : ''}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </a>
  );
}