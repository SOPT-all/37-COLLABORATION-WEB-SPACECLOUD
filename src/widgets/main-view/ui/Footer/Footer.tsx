import * as s from './Footer.css';
import { DividerIcon, ArrowRightGrayIcon } from '@/shared/assets/icons';
import Logo2 from '@shared/assets/images/img-logo2.png';

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.logoContainer}>
        <img src={Logo2} alt='로고2' className={s.logoImage} />
        <div className={s.contentSection}>
          <p>배너 광고 문의</p>
          <DividerIcon />
          <p>이용약관</p>
          <DividerIcon />
          <p>개인정보처리방침</p>
          <DividerIcon />
          <p>운영정책</p>
          <DividerIcon />
          <p>콘텐츠산업진흥법에 의한 표시</p>
          <DividerIcon />
          <p>고객문의</p>
        </div>
      </div>

      <div className={s.divider}></div>

      <div className={s.centerContainer}>
        <div className={s.contentSection}>
          <p>상호명: 주식회사 앤스페이스</p>
          <DividerIcon />
          <p>대표: 정수현</p>
          <DividerIcon />
          <p>사업자등록번호: 230-81-03117</p>
          <DividerIcon />
          <p>통신판매업신고번호: 2024-서울영등포-1094</p>
          <DividerIcon />
          <div className={s.arrowContent}>
            <p>사업자등록정보</p>
            <ArrowRightGrayIcon />
          </div>
        </div>
        <div className={s.contentSection}>
          <p>영업소재지: 서울특별시 영등포구 여의대로8 여의도파크센터 B동 2401호</p>
          <DividerIcon />
          <p>이메일: office@spacecloud.kr</p>
          <DividerIcon />
          <p>제휴문의: marketing@spacecloud.kr</p>
        </div>
        <div className={s.contentSection}>
          <p>대표전화: 1599-4312(평일 오후 2시 ~ 오후 6시)</p>
          <DividerIcon />
          <p>온라인 1:1 문의 바로가기(평일 오전 10시 ~ 오후 6시)</p>
          <DividerIcon />
        </div>
      </div>

      <div className={s.bottomContainer}>
        <div className={s.contentSection}>
          <p>
            스페이스클라우드는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
            스페이스클라우드는 공간 거래정보 및 거래에 대해 책임지지 않습니다.
          </p>
        </div>
        <div className={s.contentSection}>
          <p>Copyright NSPACE Corp. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
