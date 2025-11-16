import * as styles from "./PlaceCard.css";

interface PlaceCardProps {
  imageUrl: string;
  name: string;
  tags: string[];
  capacity: number;
  commentCount: number;
  likeCount: number;
  price: number;
  location: string;
}

const PlaceCard = ({
  imageUrl,
  name,
  tags,
  capacity,
  commentCount,
  likeCount,
  price,
  location,
}: PlaceCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt={name}
          className={styles.image}
          loading="lazy"
          draggable={false}
        />
      </div>

      <div className={styles.textArea}>
        <div className={styles.titleRow}>
          <div className={styles.name}>{name}</div>
          <span className={styles.location}>{location}</span>
        </div>

        <ul className={styles.tagsRow}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              #{tag}
            </li>
          ))}
        </ul>

        <div className={styles.bottomRow}>
          <div className={styles.meta}>
            <span>최대 {capacity}인</span>
            <span className={styles.metaComment}>댓글 {commentCount}</span>
            <span className={styles.metaLike}>좋아요 {likeCount}</span>
          </div>

          <p className={styles.price}>
            {price.toLocaleString()}
            <span className={styles.priceUnit}>원/시간</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
