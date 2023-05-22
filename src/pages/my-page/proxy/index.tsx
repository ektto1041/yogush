import CardModal from '@/components/card_modal';
import Content from './content';
import { Header } from './header';
import styles from './proxy.module.css';
import { useState } from 'react';

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