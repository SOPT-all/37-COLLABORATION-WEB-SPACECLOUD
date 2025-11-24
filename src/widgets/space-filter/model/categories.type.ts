export type Space = {
  code: string;
  name: string;
};

export type CategoriesResponse = {
  workspace: Space[];
  gathering: Space[];
};

export type GroupType = keyof CategoriesResponse;
