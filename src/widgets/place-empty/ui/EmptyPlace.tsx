import { EmptyViewIcon } from '@shared/assets/icons';
import * as S from './EmptyPlace.css';

const EmptyPlace = () => {
  return (
    <div className={S.emptyWrapper}>
      <EmptyViewIcon />
      <h3 className={S.heading}>검색 결과가 없어요</h3>
      <p className={S.description}>다른 조건으로 다시 검색해보세요</p>
    </div>
  );
};

export default EmptyPlace;
