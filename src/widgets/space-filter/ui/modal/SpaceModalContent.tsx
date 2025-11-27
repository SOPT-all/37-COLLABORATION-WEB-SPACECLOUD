import { SPACE_ICON_MAP } from '@/shared/configs/space';
import { GROUP_LABEL } from '../../config/categories.enum';
import { useCategoriesQuery } from '../../api/useCategoriesQuery';
import Button from '@/shared/ui/Button';
import type { ModalProps } from '@/shared/types/common';
import * as s from './SpaceModalContent.css';
import { FetchBoundary } from '@/shared/ui/boundary/FetchBoundary';

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
        <h3 className={s.groupTitle}>{GROUP_LABEL['workspace']}</h3>
        <div className={s.space}>
          {categories?.workspace.map((workspace) => {
            const Icon = SPACE_ICON_MAP[workspace.code];

            return (
              <Button
                key={workspace.code}
                styleType='places'
                width='auto'
                gap='g4'
                justify='start'
                font='body_m_16'
                onClick={() => handleClick(workspace.code, workspace.name)}
              >
                <Icon className={s.icon} width={18} height={18} />
                <span className={s.label}>{workspace.name}</span>
              </Button>
            );
          })}
        </div>
        <h3 className={s.groupTitle}>{GROUP_LABEL['gathering']}</h3>
        <div className={s.space}>
          {categories?.gathering.map((gathering) => {
            const Icon = SPACE_ICON_MAP[gathering.code];

            return (
              <Button
                key={gathering.code}
                styleType='places'
                width='auto'
                gap='g4'
                justify='start'
                font='body_m_16'
                onClick={() => handleClick(gathering.code, gathering.name)}
              >
                <Icon className={s.icon} width={18} height={18} />
                <span className={s.label}>{gathering.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </FetchBoundary>
  );
};

export default SpaceModalContent;
