import SubTitle from '@shared/ui/subTitle/SubTitle';
import MagazineCard from './magazineCard/MagazineCard';
import * as s from './MagazineSection.css';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/shared/apis/queryKeys';
import { fetchMagazineList } from '@/shared/apis/magazine';

// 매거진 목데이터
// const mockMagazines = [
//   {
//     id: 1,
//     title: '새로운 역사의 시작',
//     magazineImageUrl: 'https://placehold.co/550x295',
//   },
//   {
//     id: 2,
//     title: '예비 신부 Pick',
//     magazineImageUrl: 'https://placehold.co/550x295',
//   },
// ];

const MagazineSection = () => {
  const { data } = useQuery({
    queryKey: [queryKeys.MAGAZINES],
    queryFn: fetchMagazineList,
  });

  // if (isLoading) return null; // or skeleton
  // if (isError) return null;

  const magazines = data?.data.content ?? [];

  return (
    <section className={s.section}>
      <SubTitle variant='small25'>
        <SubTitle.NewBadge>도시산책, 스페이스클라우드 매거진</SubTitle.NewBadge>
      </SubTitle>
      <div className={s.list}>
        {magazines.map((m) => (
          <MagazineCard key={m.id} {...m} />
        ))}
      </div>
    </section>
  );
};

export default MagazineSection;
