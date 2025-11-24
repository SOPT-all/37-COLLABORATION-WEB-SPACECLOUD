import { FILTER_INFO } from '../config/filterConfig';

export type SpaceFilterValue = { key: string | null; content: string };
export type FilterKey = (typeof FILTER_INFO)[number]['key'];
export type FilterValue = string | SpaceFilterValue | null;
export type FilterState = Record<FilterKey, FilterValue>;
