
import styles from './main.module.css';
import Menu from './main/menu';
import Banner from './main/banner';
import SubMenu from './main/sub-menu';
import Recommendation from './main/recommendation';
import CardModal from '@/components/card_modal';
import Header from './main/header';

export default function Main() {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <Banner />
      <SubMenu type={0} />
      <SubMenu type={1} />
      <Recommendation />
    </div>
  );
}