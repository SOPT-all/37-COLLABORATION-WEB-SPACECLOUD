import { useState } from 'react';
import type { GroupType } from '@widgets/space-filter/model/categories.type.ts';
import * as S from './SpaceCategory.css';
import SpaceList from '@widgets/space-filter/ui/tab/SpaceList.tsx';
import { SPACE_TAB_LABEL } from '@widgets/space-filter/config/categories.enum.ts';
import { typedEntries } from '@shared/libs/object.ts';
import { createSearchParams, useNavigate } from 'react-router';
import { useCategoriesQuery } from '../../api/useCategoriesQuery';

const SpaceCategory = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<GroupType>('workspace');
  const { data: categories } = useCategoriesQuery();
  const currentSpaceList = categories?.[activeTab] ?? [];

  const navigateToSearch = (code: string) => {
    navigate({
      pathname: '/search',
      search: createSearchParams({ filter: code }).toString(),
    });
  };

  return (
    <section className={S.wrapper.section}>
      <div className={S.segmentedToggle} role='tablist' aria-label='장소 카테고리'>
        {typedEntries(SPACE_TAB_LABEL).map(([tab, label]) => (
          <button
            key={tab}
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
