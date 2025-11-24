import type { Space } from '@widgets/space-filter/model/categories.type.ts';
import { SPACE_ICON_MAP } from '@shared/configs/space.ts';
import * as S from './SpaceCategory.css.ts';
import clsx from 'clsx';
import { typography } from '@shared/styles/typography.css.ts';

type SpaceListProps = {
  activeTab: string;
  spaceList: Space[];
  onClick: (code: string) => void;
};

const SpaceList = ({ activeTab, spaceList, onClick }: SpaceListProps) => {
  return (
    <div
      className={S.wrapper.spaceList}
      role='tabpanel'
      id={`${activeTab}-panel`}
      aria-labelledby={`${activeTab}-tab`}
    >
      {spaceList.map((space) => {
        const Icon = SPACE_ICON_MAP[space.code];
        return (
          <button
            key={space.code}
            className={S.item.button}
            type='button'
            onClick={() => onClick(space.code)}
          >
            <div className={S.item.icon}>
              <Icon width={30} height={30} aria-hidden='true' />
            </div>
            <span className={clsx(S.item.label, typography.body_r_12_2)}>{space.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SpaceList;
