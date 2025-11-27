import Lottie from 'lottie-react';
import loadingAnimation from '@shared/assets/loading_lottie.json';
import * as s from './LoadingView.css';

const LoadingView = () => {
  return (
    <div className={s.wrapper}>
      <Lottie animationData={loadingAnimation} loop autoplay className={s.lottie} />
    </div>
  );
};

export default LoadingView;
