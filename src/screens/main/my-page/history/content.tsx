import styles from './content.module.css';
import { Dispatch, SetStateAction } from 'react';
import HistoryItem from './history-item';
import { HistoryItems } from '@/data/data';

type ContentProps = {
  setCardModal: Dispatch<SetStateAction<boolean>>;
};

export default function Content({
  setCardModal,
}: ContentProps) {
  return (
    <div className={styles.container} >
      {HistoryItems.map(h => (
        <HistoryItem key={h.name} item={h} setCardModal={setCardModal} />
      ))}
      
    </div>
  )
}