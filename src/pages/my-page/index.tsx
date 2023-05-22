
import Header from '@/screens/main/my-page/header';
import styles from './my-page.module.css';
import Greeting from '@/screens/main/my-page/greeting';
import MainButtonBox from '@/screens/main/my-page/main-button-box';
import DeliveryStatus from '@/screens/main/my-page/delivery-status';
import ButtonBox from '@/screens/main/my-page/button-box';

export async function getServerSideProps() { return { props: {}} }
export default function MyPage() {
  return (
    <div className={styles.container}>
      <Header />
      <Greeting />
      <MainButtonBox />
      <DeliveryStatus />
      <ButtonBox />
    </div>
  );
};