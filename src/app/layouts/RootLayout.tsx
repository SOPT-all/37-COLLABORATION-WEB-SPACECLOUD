import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      {/* 추후 구현한 헤더 컴포넌트를 추가합니다. */}
      <header />
      {/* 추후 루트 레이아웃 스타일링을 진행합니다. */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
