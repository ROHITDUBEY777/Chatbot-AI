import { Suspense, lazy } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));


export default function App() {
  return (
   <Suspense fallback={<div>Loading 3D...</div>}>
  <Spline scene="https://prod.spline.design/XVHdmjA8iiqx0JuL/scene.splinecode" preserveDrawingBuffer={false} />

</Suspense>

  );
}
