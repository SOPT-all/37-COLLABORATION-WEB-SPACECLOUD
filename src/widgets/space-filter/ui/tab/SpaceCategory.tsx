import { dummy } from '@widgets/space-filter/model/categories.mock.ts';
import { useState } from 'react';
import type { GroupType } from '@widgets/space-filter/model/categories.type.ts';
import * as S from './SpaceCategory.css';
import SpaceList from '@widgets/space-filter/ui/tab/SpaceList.tsx';
import { SPACE_TAB_LABEL } from '@widgets/space-filter/config/categories.enum.ts';
import { typedEntries } from '@shared/libs/object.ts';
import { useNavigate } from 'react-router';

const SpaceCategory = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<GroupType>('workspace');
  const currentSpaceList = dummy[activeTab];

  const navigateToSearch = (code: string) => {
    navigate(`/search?${activeTab}=${code}`);
  };

  return (
    <section className={S.wrapper.section}>
      <div className={S.segmentedToggle} role='tablist' aria-label='장소 카테고리'>
        {typedEntries(SPACE_TAB_LABEL).map(([tab, label]) => (
          <button
            className={S.tab({ active: activeTab === tab })}
            type='button'
            aria-controls={`${tab}-panel`}
            aria-selected={activeTab === tab}
            id={`${tab}-tab`}
            onClick={() => setActiveTab(tab)}
          >
            {label}
          </button>
        ))}
      </div>
      <SpaceList activeTab={activeTab} spaceList={currentSpaceList} onClick={navigateToSearch} />
    </section>
  );
};

export default SpaceCategory;
