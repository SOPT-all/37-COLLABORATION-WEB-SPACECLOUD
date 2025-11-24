import type { ModalProps } from '@/shared/types/common';
import { SPACE_ICON_MAP } from '@/shared/configs/space';
import Button from '@/shared/ui/Button';
import * as s from './SpaceModalContent.css';
import { dummy } from '@/shared/configs/space';

type GroupType = keyof typeof dummy;

const GROUP_LABEL = {
  workspace: '작업 공간',
  gathering: '모임 공간',
};

const SpaceModalContent = ({ onClose, onChange }: ModalProps) => {
  // 버튼 클릭 시 상태 업데이트 및 모달 닫기
  const handleClick = (key: string, content: string) => {
    onChange?.({ key, content });
    onClose?.();
  };

  return (
    <div className={s.wrapper}>
      {Object.entries(dummy).map(([key, items]) => {
        const groupName = key as GroupType;
        return (
          <div key={groupName} className={s.group}>
            <h3 className={s.groupTitle}>{GROUP_LABEL[groupName]}</h3>
            <div className={s.space}>
              {items.map((item) => {
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
        );
      })}
    </div>
  );
};

export default SpaceModalContent;
