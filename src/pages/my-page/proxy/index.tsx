import CardModal from '@/components/card_modal';
import styles from './proxy.module.css';
import { useState } from 'react';
import Header from '@/screens/main/my-page/proxy/header';
import Content from '@/screens/main/my-page/proxy/content';

export async function getServerSideProps() { return { props: {}} }
export default function Proxy() {
  const [isCardModal, setCardModal] = useState<boolean>(false);

  return (
    <div className={styles.container} >
      <Header />
      <Content setCardModal={setCardModal} />
      {isCardModal && (<CardModal />)}
    </div>
  )
}