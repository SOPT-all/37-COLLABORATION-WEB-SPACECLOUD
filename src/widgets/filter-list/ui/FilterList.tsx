import CouponBtn from './coupon-btn/CouponBtn';
import SortMenu from './sortMenu/SortMenu';
import { Row } from '@/shared/ui/layout';

const FilterList = () => {
  return (
    <Row justify='between' align='center'>
      <CouponBtn />
      <SortMenu />
    </Row>
  );
};

export default FilterList;
