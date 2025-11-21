import * as s from './MainTitle.css';

const MainTitle = () => {
  return (
    <div className={s.container}>
      <p className={s.titleFont}>작업부터 모임까지,</p>
      <p className={s.titleFont}>나에게 딱 맞는 공간을 찾아보세요.</p>
    </div>
  );
};

export default MainTitle;
