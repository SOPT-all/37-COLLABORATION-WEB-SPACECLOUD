import { MenuIcon, SearchIcon, ChatIcon } from '@/shared/assets/icons';
import Logo from '@/shared/assets/images/img-logo1.png';
import * as s from './Header.css';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={s.container}>
      <div className={s.leftContainer}>
        <MenuIcon />
      </div>
      <button type='button' onClick={() => navigate('/')}>
        <img src={Logo} alt='로고' className={s.logo} />
      </button>
      <div className={s.rightContainer}>
        <div className={s.searchContainer}>
          <input placeholder='어떤 공간을 찾으세요?' className={s.searchInput} />
          <SearchIcon className={s.searchIcon} />
        </div>
        <ChatIcon />
      </div>
    </header>
  );
};

export default Header;
