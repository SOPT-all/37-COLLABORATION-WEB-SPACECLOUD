import { Outlet } from 'react-router';
import { rootLayout } from '@app/layouts/RootLayout.css.ts';
import Header from '@/widgets/main-view/ui/Header/Header';
import Footer from '@/widgets/main-view/ui/Footer/Footer';
import ChatFloat from '@/widgets/main-view/ui/chat-float/ChatFloat';

const RootLayout = () => {
  return (
    <>
      <Header />
      {/* 추후 루트 레이아웃 스타일링을 진행합니다. */}
      <main className={rootLayout}>
        <Outlet />
        <ChatFloat />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
