import { divider } from './Divider.css';

type DividerProps = {
  tone?: 'gray300' | 'gray400';
  thick?: 'thin' | 'medium' | 'thick';
};

const Divider = ({ tone = 'gray300', thick = 'thin' }: DividerProps) => {
  return <div className={divider({ tone, thick })} />;
};

export default Divider;
