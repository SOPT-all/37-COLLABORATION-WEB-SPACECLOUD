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
