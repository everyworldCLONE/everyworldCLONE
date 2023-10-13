import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import MainLayout from './pages/home/MainLayout';
import MusicLayout from './pages/music/MusicLayout';
import AlbumDetail from './components/music/detail/AlbumDetail';
import MyPageLayout from './pages/mypage/MypageLayout';
import Footer from './layouts/footer/Footer';

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
        {
          path: 'music/:albumId',
          element: <AlbumDetail />,
        },
        {
          path: 'mypage',
          element: <MyPageLayout />,
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
            <Footer />
          </div>
        </main>
      </RecoilRoot>
    </>
  );
};
