import type { ModalProps } from '@/shared/types/common';
import { SPACE_ICON_MAP } from '@/shared/configs/space';
import Button from '@/shared/ui/Button';
import * as s from './SpaceModalContent.css';
import { dummy } from '@widgets/space-filter/model/categories.mock.ts';
import { GROUP_LABEL } from '@widgets/space-filter/config/categories.enum.ts';
import { typedEntries } from '@shared/libs/object.ts';

const SpaceModalContent = ({ onClose }: ModalProps) => {
  return (
    <div className={s.wrapper}>
      {typedEntries(dummy).map(([key, items]) => {
        return (
          <div key={key} className={s.group}>
            <h3 className={s.groupTitle}>{GROUP_LABEL[key]}</h3>
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
                    onClick={onClose}
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
