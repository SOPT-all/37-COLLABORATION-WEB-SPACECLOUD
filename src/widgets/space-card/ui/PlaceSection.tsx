import { useEffect, useRef, useState } from 'react';
import SubTitle, { type SubTitleVariant } from '@shared/ui/subTitle/SubTitle';
import { LeftArrowButton, RightArrowButton } from '@shared/ui/arrowButton';
import PlaceCard, { type PlaceCardProps } from './placeCard/PlaceCard';
import * as s from './PlaceSection.css';

type PlaceSubTitleVariant = Extract<SubTitleVariant, 'small24' | 'large'>;

interface PlaceSectionProps {
  title: string;
  subtitleVariant?: PlaceSubTitleVariant;
  places?: PlaceCardProps[];
}

const mockPlaces: PlaceCardProps[] = [
  {
    id: 1,
    name: '이랑 한식주점배경촬영장',
    capacity: 30,
    commentCount: 0,
    likeCount: 0,
    price: 33000,
    priceUnit: 'HOUR',
    thumbnailImageUrl: 'https://placehold.co/362x162',
    hashtags: ['한식주점', '촬영대관', '자연채광'],
    address: '문정동',
    coupon: false,
  },
  {
    id: 2,
    name: '[신촌]조용한소모임. 북카페',
    capacity: 20,
    commentCount: 0,
    likeCount: 1,
    price: 2500,
    priceUnit: 'HOUR',
    thumbnailImageUrl: 'https://placehold.co/362x162',
    hashtags: ['공영주차장', '소모임', '독서모임', '#북카페'],
    address: '노고산동',
    coupon: false,
  },
  {
    id: 3,
    name: '마고',
    capacity: 30,
    commentCount: 0,
    likeCount: 0,
    price: 33000,
    priceUnit: 'HOUR',
    thumbnailImageUrl: 'https://placehold.co/362x162',
    hashtags: ['운동', '촬영', '필라테스', '요가'],
    address: '홍은동',
    coupon: true,
  },
];

const PlaceSection = ({
  title,
  subtitleVariant = 'small24',
  places = mockPlaces,
}: PlaceSectionProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrowState = () => {
    const listElement = listRef.current;
    if (!listElement) return;

    const { scrollLeft, scrollWidth, clientWidth } = listElement;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const listElement = listRef.current;
    if (!listElement) return;

    updateArrowState();
    const handleScroll = () => updateArrowState();

    listElement.addEventListener('scroll', handleScroll);
    return () => {
      listElement.removeEventListener('scroll', handleScroll);
    };
  }, [places.length, subtitleVariant]);

  const handleScroll = (direction: 'left' | 'right') => {
    const listElement = listRef.current;
    if (!listElement) return;

    const firstCard = listElement.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 0;
    const style = getComputedStyle(listElement);
    const gapPx = parseFloat(style.columnGap || style.gap || '0') || 0;
    const scrollAmount = cardWidth + gapPx;

    listElement.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });

    window.requestAnimationFrame(updateArrowState);
  };

  return (
    <section className={s.section}>
      <SubTitle variant={subtitleVariant}>{title}</SubTitle>
      <div className={`${s.carousel} ${s.carouselGap[subtitleVariant]}`}>
        <LeftArrowButton
          className={s.arrowLeft}
          isActive={canScrollLeft}
          onClick={() => handleScroll('left')}
          aria-label='이전 장소 카드 보기'
        />
        <div className={`${s.list} ${s.listGap[subtitleVariant]}`} ref={listRef}>
          {places.map((place) => (
            <PlaceCard key={place.id} {...place} />
          ))}
        </div>
        <RightArrowButton
          className={s.arrowRight}
          isActive={canScrollRight}
          onClick={() => handleScroll('right')}
          aria-label='다음 장소 카드 보기'
        />
      </div>
    </section>
  );
};

export default PlaceSection;
