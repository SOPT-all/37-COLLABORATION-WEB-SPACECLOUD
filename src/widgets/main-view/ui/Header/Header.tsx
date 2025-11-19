import { MenuIcon, SearchIcon, ChatIcon } from '@/shared/assets/icons';
import Logo from '@/shared/assets/images/img-logo1.png';
import * as s from './Header.css';

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.leftContainer}>
        <MenuIcon />
      </div>
      <img src={Logo} alt='로고' className={s.logo} />

      <div className={s.rightContainer}>
        <div className={s.searchContainer}>
          <input placeholder='어떤 공간을 찾으세요?' className={s.searchInput} />
          <SearchIcon className={s.searchIcon} />
        </div>
        <ChatIcon />
      </div>
    </div>
  );
};

export default Header;
