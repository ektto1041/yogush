import ButtonBox from './button-box';
import DeliveryStatus from './delivery-status';
import Greeting from './greeting';
import Header from './header';
import MainButtonBox from './main-button-box';
import styles from './my-page.module.css';

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