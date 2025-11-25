import SpaceModalContent from '../ui/modal/SpaceModalContent';
import RegionModalContent from '../ui/modal/RegionModalContent';
import CapacityModalContent from '../ui/modal/CapacityModalContent';
import CalendarModalContent from '../ui/modal/CalendarModalContent';

export const FILTER_INFO = [
  { key: 'filter', label: '공간', Component: SpaceModalContent },
  { key: 'location', label: '지역', Component: RegionModalContent },
  { key: 'capacity', label: '인원', Component: CapacityModalContent },
  { key: 'reservationDate', label: '날짜', Component: CalendarModalContent },
] as const;
