
import styles from './main.module.css';
import Menu from '../screens/main/menu';
import Banner from '../screens/main/banner';
import SubMenu from '../screens/main/sub-menu';
import Recommendation from '../screens/main/recommendation';
import CardModal from '@/components/card_modal';
import Header from '../screens/main/header';

export async function getServerSideProps() { return { props: {}} }

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