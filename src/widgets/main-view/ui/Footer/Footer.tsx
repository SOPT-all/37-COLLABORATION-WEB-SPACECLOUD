import * as s from './Footer.css';
import { DividerIcon, ArrowRightIcon } from '@/shared/assets/icons';
import Logo2 from '@shared/assets/images/img-logo2.webp';
import { vars } from '@/shared/styles/token.css';

const FOOTER_TOP_MENU = [
  { id: 1, label: '배너 광고 문의' },
  { id: 2, label: '이용약관' },
  { id: 3, label: '개인정보처리방침' },
  { id: 4, label: '운영정책' },
  { id: 5, label: '콘텐츠산업진흥법에 의한 표시' },
  { id: 6, label: '고객문의' },
];

const BUSINESS_INFO_ROW1 = [
  { id: 1, label: '상호명: 주식회사 앤스페이스' },
  { id: 2, label: '대표: 정수현' },
  { id: 3, label: '사업자등록번호: 230-81-03117' },
  { id: 4, label: '통신판매업신고번호: 2024-서울영등포-1094' },
];

const BUSINESS_INFO_ROW2 = [
  { id: 1, label: '영업소재지: 서울특별시 영등포구 여의대로8 여의도파크센터 B동 2401호' },
  { id: 2, label: '이메일: office@spacecloud.kr' },
  { id: 3, label: '제휴문의: marketing@spacecloud.kr' },
];

const BUSINESS_INFO_ROW3 = [
  { id: 1, label: '대표전화: 1599-4312(평일 오후 2시 ~ 오후 6시)' },
  { id: 2, label: '온라인 1:1 문의 바로가기(평일 오전 10시 ~ 오후 6시)' },
];

const Footer = () => {
  return (
    <footer className={s.container}>
      <div className={s.logoContainer}>
        <img src={Logo2} alt='로고2' className={s.logoImage} />

        <div className={s.contentSection}>
          {FOOTER_TOP_MENU.map((item) => (
            <span key={item.id} className={s.contentSection}>
              <p className={s.contentFont}>{item.label}</p>
              {item.id !== FOOTER_TOP_MENU[FOOTER_TOP_MENU.length - 1].id && <DividerIcon />}
            </span>
          ))}
        </div>
      </div>

      <div className={s.divider}></div>

      <div className={s.centerContainer}>
        <div className={s.contentSection}>
          {BUSINESS_INFO_ROW1.map((item) => (
            <span key={item.id} className={s.contentSection}>
              <p className={s.contentFont}>{item.label}</p>
              <DividerIcon />
            </span>
          ))}
          <div className={s.arrowContent}>
            <p className={s.padding}>사업자등록정보</p>
            <ArrowRightIcon
              width={16}
              height={16}
              stroke={vars.color.grayscale.gray600}
              strokeWidth={1.3}
            />
          </div>
        </div>

        <div className={s.contentSection}>
          {BUSINESS_INFO_ROW2.map((item) => (
            <span key={item.id} className={s.contentSection}>
              <p className={s.contentFont}>{item.label}</p>
              {item.id !== BUSINESS_INFO_ROW2[BUSINESS_INFO_ROW2.length - 1].id && <DividerIcon />}
            </span>
          ))}
        </div>

        <div className={s.contentSection}>
          {BUSINESS_INFO_ROW3.map((item) => (
            <span key={item.id} className={s.contentSection}>
              <p className={s.contentFont}>{item.label}</p>
              {item.id !== BUSINESS_INFO_ROW3[BUSINESS_INFO_ROW3.length - 1].id && <DividerIcon />}
            </span>
          ))}
        </div>
      </div>

      <div className={s.bottomContainer}>
        <div className={s.contentSection}>
          <p className={s.contentFont}>
            스페이스클라우드는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
            스페이스클라우드는 공간 거래정보 및 거래에 대해 책임지지 않습니다.
          </p>
        </div>
        <div className={s.contentSection}>
          <p className={s.contentFont}>Copyright NSPACE Corp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
