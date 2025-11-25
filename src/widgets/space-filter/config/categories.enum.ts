import type { GroupType } from '@widgets/space-filter/model/categories.type.ts';

export const GROUP_LABEL: Record<GroupType, '작업 공간' | '모임 공간'> = {
  workspace: '작업 공간',
  gathering: '모임 공간',
};

export const SPACE_TAB_LABEL: Record<GroupType, '작업' | '모임'> = {
  workspace: '작업',
  gathering: '모임',
};
