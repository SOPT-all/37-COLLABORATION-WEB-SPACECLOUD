import { createBrowserRouter } from 'react-router';
import RootLayout from '@app/layouts/RootLayout.tsx';

/**
 * App 전체 라우팅 설정
 * - Lazy() 사용으로 라우트별 코드 스플리팅 적용
 * - React Router v7은 초기 진입 시 부분 하이드레이션 단계가 존재하여
 *   임시 hydrateFallbackElement를 지정하였습니다. (console 경고로 인해)
 * - RootLayout 아래 Page 단위 Route를 Children으로 배치하였습니다.
 * - 라우트 파일 규모가 크지 않고, 분리하였을 경우 오히려 복잡도가 증가하기 때문에 별도 파일로 분리하지 않았습니다.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    /* 초기 화면 fallback */
    hydrateFallbackElement: <div>초기 화면 로딩딩...</div>,
    children: [
      {
        index: true,
        async lazy() {
          const { default: HomePage } = await import('@pages/home/ui/HomePage.tsx');
          return { Component: HomePage };
        },
      },
      {
        path: 'search',
        async lazy() {
          const { default: SearchPage } = await import('@pages/search/ui/SearchPage.tsx');
          return { Component: SearchPage };
        },
      },
    ],
  },
  {
    path: '*',
    async lazy() {
      const { default: NotFoundPage } = await import('@pages/common/ui/NotFoundPage.tsx');
      return { Component: NotFoundPage };
    },
  },
]);

export default router;
