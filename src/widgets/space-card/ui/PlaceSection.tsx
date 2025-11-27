import { useEffect, useRef, useState } from 'react';
import { type SubTitleVariant } from '@shared/ui/subTitle/SubTitle';
import { LeftArrowButton, RightArrowButton } from '@shared/ui/arrowButton';
import PlaceCard, { type PlaceCardProps } from './placeCard/PlaceCard';
import * as s from './PlaceSection.css';

type PlaceSubTitleVariant = Extract<SubTitleVariant, 'small24' | 'large'>;

interface PlaceSectionProps {
  subtitleVariant?: PlaceSubTitleVariant;
  places: PlaceCardProps[];
}

const PlaceSection = ({ subtitleVariant = 'small24', places }: PlaceSectionProps) => {
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
  }, [places.length]);

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
