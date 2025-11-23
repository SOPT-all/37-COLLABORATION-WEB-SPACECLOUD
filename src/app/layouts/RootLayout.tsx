import { Outlet } from 'react-router';
import { rootLayout } from '@app/layouts/RootLayout.css.ts';
import Header from '@/widgets/main-view/ui/Header/Header';
import Footer from '@/widgets/main-view/ui/Footer/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className={rootLayout}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
