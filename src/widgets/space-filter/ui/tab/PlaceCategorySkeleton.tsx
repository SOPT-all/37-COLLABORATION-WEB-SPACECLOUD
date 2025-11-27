import * as S from './SpaceCategory.css';

const PlaceCategorySkeleton = () => {
  return (
    <section className={S.wrapper.section}>
      {/* 탭 영역 skeleton */}
      <div className={S.segmentedToggleSkeleton} aria-hidden='true'>
        <div className={S.tabSkeleton} />
        <div className={S.tabSkeleton} />
      </div>

      {/* 카테고리 아이템 리스트 skeleton */}
      <div className={S.wrapper.spaceList}>
        {Array.from({ length: 10 }).map((_, idx) => (
          <div key={idx} className={S.item.button}>
            <div className={S.skeletonCircle} />
            <div className={S.skeletonLabel} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlaceCategorySkeleton;
