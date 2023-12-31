import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import MainLayout from './pages/home/MainLayout';
import MusicLayout from './pages/music/MusicLayout';
import Header from './layouts/Header';
import AlbumDetail from './components/music/detail/AlbumDetail';
import MyPageLayout from './pages/mypage/MyPageLayout';
import MemberShipLayout from './pages/membership/MemberShipLayout';
import Footer from './layouts/footer/Footer';
import BgImg from './assets/bgimg.png';

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
          path: 'membership',
          element: <MemberShipLayout />,
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
          <div className="bg-wrap">
            <div className="img-container">
              <img className="bg-img" src={BgImg}></img>
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: '30' }}>
            <Header />
            <Outlet />
            <Footer />
          </div>
        </main>
      </RecoilRoot>
    </>
  );
};
