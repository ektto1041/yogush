import { ProxyItems } from '@/data/data';
import styles from './content.module.css';
import ProxyItem from './proxy-item';
import { Dispatch, SetStateAction } from 'react';

type ContentProps = {
  setCardModal: Dispatch<SetStateAction<boolean>>;
};

export default function Content({
  setCardModal,
}: ContentProps) {
  return (
    <div className={styles.container} >
      <div className={styles.content} >
        <div className={styles.title} >
          대리구매 요청
        </div>
        {ProxyItems.map(p => (
          <ProxyItem key={p.record} item={p} setCardModal={setCardModal} />
        ))}
      </div>
    </div>
  )
}