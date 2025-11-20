import * as s from './MagazineCard.css';

interface MagazineCardProps {
  id: number;
  title: string;
  magazineImageUrl: string;
}

const MagazineCard = ({ magazineImageUrl, title }: MagazineCardProps) => {
  return (
    <article className={s.container}>
      <img
        className={s.image}
        src={magazineImageUrl}
        alt={title}
        loading='lazy'
        draggable={false}
      />
    </article>
  );
};

export default MagazineCard;
