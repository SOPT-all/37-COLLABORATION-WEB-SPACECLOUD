import Button from '@/shared/ui/Button';
import { SPACE_ICON_MAP } from '@/shared/configs/space';
import { GROUP_LABEL } from '../../config/categories.enum';
import { useCategoriesQuery } from '../../api/useCategoriesQuery';
import { FetchBoundary } from '@/shared/ui/boundary/FetchBoundary';
import { typedEntries } from '@/shared/libs/object';
import * as s from './SpaceModalContent.css';
import type { ModalProps } from '@/shared/types/common';

const SpaceModalContent = ({ onClose, onChange }: ModalProps) => {
  const { data: categories } = useCategoriesQuery();

  // 버튼 클릭 시 상태 업데이트 및 모달 닫기
  const handleClick = (key: string, content: string) => {
    onChange?.({ key, content });
    onClose?.();
  };

  return (
    <FetchBoundary>
      <div className={s.wrapper}>
        {typedEntries(categories).map(([key, items]) => (
          <div key={key} className={s.group}>
            <h3 className={s.groupTitle}>{GROUP_LABEL[key]}</h3>
            <div className={s.space}>
              {items?.map((item) => {
                const Icon = SPACE_ICON_MAP[item.code];
                return (
                  <Button
                    key={item.code}
                    styleType='places'
                    width='auto'
                    gap='g4'
                    justify='start'
                    font='body_m_16'
                    onClick={() => handleClick(item.code, item.name)}
                  >
                    <Icon className={s.icon} width={18} height={18} />
                    <span className={s.label}>{item.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </FetchBoundary>
  );
};

export default SpaceModalContent;
