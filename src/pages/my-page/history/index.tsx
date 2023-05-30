import CardModal from '@/components/card_modal';
import styles from './history.module.css';
import { useState } from 'react';
import Header from '@/screens/main/my-page/history/header';
import Content from '@/screens/main/my-page/history/content';
import IntervalModal from '@/components/interval_modal';

export async function getServerSideProps() { return { props: {}} }
export default function History() {
  const [isCardModal, setCardModal] = useState<boolean>(false);
  const [isIntervalModal, setIntervalModal] = useState<boolean>(false);

  const finishInterval = () => {
    setIntervalModal(false);
    setCardModal(true);
  }

  return (
    <div className={styles.container} >
      <Header />
      <Content setCardModal={setCardModal} setIntervalModal={setIntervalModal} />
      {isCardModal && (<CardModal />)}
      {isIntervalModal && (<IntervalModal finishInterval={finishInterval} />)}
    </div>
  )
}