import type { ModalProps } from '@/shared/types/common';
import { SPACE_ICON_MAP } from '@/shared/configs/space';
import Button from '@/shared/ui/Button';
import * as s from './SpaceModalContent.css';
import type { FilterValue } from '../MainFilter';

// api 응답값
const dummy = {
  workspace: [
    {
      code: 'STUDY_ROOM',
      name: '스터디룸',
    },
    {
      code: 'MEETING_ROOM',
      name: '회의실',
    },
    {
      code: 'PRIVATE_OFFICE',
      name: '독립오피스',
    },
    {
      code: 'COWORKING_OFFICE',
      name: '코워킹오피스',
    },
    {
      code: 'RENTAL_STUDIO',
      name: '렌탈스튜디오',
    },
    {
      code: 'PHOTO_STUDIO',
      name: '촬영스튜디오',
    },
    {
      code: 'HORIZON',
      name: '호리존',
    },
    {
      code: 'OUTDOOR_SHOOT',
      name: '실외촬영',
    },
    {
      code: 'RECORDING_ROOM',
      name: '녹음실',
    },
    {
      code: 'PRACTICE_ROOM',
      name: '연습실',
    },
    {
      code: 'VOCAL_PRACTICE',
      name: '보컬연습실',
    },
    {
      code: 'INSTRUMENT_PRACTICE',
      name: '악기연습실',
    },
    {
      code: 'DANCE_PRACTICE',
      name: '댄스연습실',
    },
    {
      code: 'LIVE_STREAM',
      name: '라이브방송',
    },
    {
      code: 'LECTURE_ROOM',
      name: '강의실',
    },
    {
      code: 'CONFERENCE',
      name: '컨퍼런스',
    },
    {
      code: 'GYM',
      name: '운동시설',
    },
  ],
  gathering: [
    {
      code: 'PARTY_ROOM',
      name: '파티룸',
    },
    {
      code: 'PERFORMANCE_HALL',
      name: '공연장',
    },
    {
      code: 'SHARED_KITCHEN',
      name: '공유주방',
    },
    {
      code: 'CAFE',
      name: '카페',
    },
    {
      code: 'SEMINAR_ROOM',
      name: '세미나실',
    },
    {
      code: 'SMALL_WEDDING',
      name: '스몰웨딩',
    },
    {
      code: 'GALLERY',
      name: '갤러리',
    },
    {
      code: 'VIRTUAL_OFFICE',
      name: '비상주서비스',
    },
    {
      code: 'DAY_CAMPING',
      name: '당일캠핑',
    },
    {
      code: 'HOUSE',
      name: '가정집',
    },
  ],
};
type GroupType = keyof typeof dummy;

const GROUP_LABEL = {
  workspace: '작업 공간',
  gathering: '모임 공간',
};

interface SpaceModalContentProps extends ModalProps {
  value: FilterValue;
}

const SpaceModalContent = ({ onClose, /*value,*/ onChange }: SpaceModalContentProps) => {
  // 버튼 클릭 시 상태 업데이트 및 모달 닫기
  const handleClick = (code: string, name: string) => {
    onChange?.({ code, name });
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
                // const isSelected = value === item.code;

                return (
                  <Button
                    key={item.code}
                    // styleType={isSelected ? 'placeSelected' : 'places'}
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
