import * as s from './MagazineCard.css';

interface MagazineCardProps {
  imageUrl: string;
  alt: string;
}

const MagazineCard = ({ imageUrl, alt }: MagazineCardProps) => {
  return (
    <div className={s.container}>
      <img className={s.image} src={imageUrl} alt={alt} loading='lazy' draggable={false} />
    </div>
  );
};

export default MagazineCard;
