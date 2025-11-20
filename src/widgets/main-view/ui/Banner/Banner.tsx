import * as s from './Banner.css';
import BannerImg from '@/shared/assets/images/img-banner.png';
import RightArrowButton from '@/shared/ui/arrowButton/RightArrowButton';
import LeftArrowButton from '@/shared/ui/arrowButton/LeftArrowButton';

const Banner = () => {
  return (
    <div className={s.wrapper}>
      <LeftArrowButton className={s.leftArrow} />
      <div className={s.container}>
        <img src={BannerImg} alt='쿠폰 배너' className={s.bannerImage} />
        <div className={s.counter}>
          <p className={s.counterFont}>2 / 3</p>
        </div>
      </div>
      <RightArrowButton className={s.rightArrow} />
    </div>
  );
};

export default Banner;
