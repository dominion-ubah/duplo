import React, { lazy, Suspense } from 'react';

const LazyHomeAsideBar = lazy(() => import('./HomeAsideBar'));

const HomeAsideBar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHomeAsideBar {...props} />
  </Suspense>
);

export default HomeAsideBar;
