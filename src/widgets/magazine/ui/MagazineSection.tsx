import MagazineCard from './magazineCard/MagazineCard';
import * as s from './MagazineSection.css';

// 매거진 목데이터
const mockMagazines = [
  {
    id: 1,
    title: '새로운 역사의 시작',
    magazineImageUrl: 'https://placehold.co/550x295',
  },
  {
    id: 2,
    title: '예비 신부 Pick',
    magazineImageUrl: 'https://placehold.co/550x295',
  },
];

const MagazineSection = () => {
  return (
    <section className={s.section}>
      <div className={s.list}>
        {mockMagazines.map((magazine) => (
          <MagazineCard key={magazine.id} {...magazine} />
        ))}
      </div>
    </section>
  );
};

export default MagazineSection;
