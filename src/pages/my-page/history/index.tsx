import CardModal from '@/components/card_modal';
import styles from './history.module.css';
import { useState } from 'react';
import Header from '@/screens/main/my-page/history/header';
import Content from '@/screens/main/my-page/history/content';

export async function getServerSideProps() { return { props: {}} }
export default function History() {
  const [isCardModal, setCardModal] = useState<boolean>(false);

  return (
    <div className={styles.container} >
      <Header />
      <Content setCardModal={setCardModal} />
      {isCardModal && (<CardModal />)}
    </div>
  )
}