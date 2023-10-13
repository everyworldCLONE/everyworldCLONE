import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import MainLayout from './pages/home/MainLayout';
import MusicLayout from './pages/music/MusicLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <MainLayout />,
        },
        {
          path: 'music',
          element: <MusicLayout />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

const Root = () => {
  return (
    <>
      <RecoilRoot>
        <main>
          <div className="bg-img">
            <div className="img-container">
              <img></img>
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: '30' }}>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
          </div>
        </main>
      </RecoilRoot>
    </>
  );
};
