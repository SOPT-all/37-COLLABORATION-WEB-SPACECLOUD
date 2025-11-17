import * as s from './MagazineCard.css';

interface MagazineCardProps {
  imageUrl: string;
  alt: string;
}

const MagazineCard = ({ imageUrl, alt }: MagazineCardProps) => {
  return (
    <article className={s.container}>
      <img className={s.image} src={imageUrl} alt={alt} loading='lazy' draggable={false} />
    </article>
  );
};

export default MagazineCard;
