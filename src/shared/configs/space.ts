import * as Icons from '@shared/assets/icons/space-types/index';
import type { FC, SVGProps } from 'react';

type SvgIconType = FC<SVGProps<SVGSVGElement>>;

export const SPACE_ICON_MAP: Record<string, SvgIconType> = {
  STUDY_ROOM: Icons.StudyRoom,
  MEETING_ROOM: Icons.MeetingRoom,
  PRIVATE_OFFICE: Icons.PracticeRoom,
  COWORKING_OFFICE: Icons.CoWorkingOffice,
  RENTAL_STUDIO: Icons.RentalStudio,
  PHOTO_STUDIO: Icons.PhotoStudio,
  HORIZON: Icons.Horizon,
  OUTDOOR_SHOOT: Icons.OutdoorShoot,
  RECORDING_ROOM: Icons.RecordingRoom,
  PRACTICE_ROOM: Icons.PracticeRoom,
  VOCAL_PRACTICE: Icons.VocalPractice,
  INSTRUMENT_PRACTICE: Icons.InstrumentPractice,
  DANCE_PRACTICE: Icons.DancePractice,
  LIVE_STREAM: Icons.Livestream,
  LECTURE_ROOM: Icons.LectureRoom,
  CONFERENCE: Icons.Conference,
  GYM: Icons.Gym,
  PARTY_ROOM: Icons.PartyRoom,
  PERFORMANCE_HALL: Icons.PerformanceHall,
  SHARED_KITCHEN: Icons.SharedKitchen,
  CAFE: Icons.Cafe,
  SEMINAR_ROOM: Icons.SeminarRoom,
  SMALL_WEDDING: Icons.SmallWedding,
  GALLERY: Icons.Gallery,
  VIRTUAL_OFFICE: Icons.VirtualOffice,
  DAY_CAMPING: Icons.DayCamping,
  HOUSE: Icons.House,
};

// api 응답값
export const dummy = {
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
