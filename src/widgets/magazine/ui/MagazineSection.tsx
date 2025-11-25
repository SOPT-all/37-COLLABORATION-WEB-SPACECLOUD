import MagazineCard from './magazineCard/MagazineCard';
import * as s from './MagazineSection.css';
import { useMagazineListQuery } from '@widgets/magazine/api/useMagazineQuery';

const MagazineSection = () => {
  const { data } = useMagazineListQuery();
  const magazines = data?.data ?? [];
  return (
    <section className={s.section}>
      <div className={s.list}>
        {magazines.map((magazine) => (
          <MagazineCard key={magazine.id} {...magazine} />
        ))}
      </div>
    </section>
  );
};

export default MagazineSection;
