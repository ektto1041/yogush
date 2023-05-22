import { Header } from './main/header';
import styles from './main.module.css';
import Menu from './main/menu';
import Banner from './main/banner';
import SubMenu from './main/sub-menu';
import Recommendation from './main/recommendation';
import CardModal from '@/components/card_modal';

export default function Main() {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <Banner />
      <SubMenu type={0} />
      <SubMenu type={1} />
      <Recommendation />
      <CardModal />
    </div>
  );
}