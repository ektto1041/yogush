import styles from './history-item.module.css';
import { mdiPlayCircle } from '@mdi/js';
import { mdiStopCircle } from '@mdi/js';
import Icon from '@mdi/react';
import { Dispatch, SetStateAction, useState } from 'react';

export type HistoryItemType = {
  img: string;
  date: string;
  name: string;
  price: string;
  disabled: boolean;
};

type HistoryItemProps = {
  setCardModal: Dispatch<SetStateAction<boolean>>;
  setIntervalModal: Dispatch<SetStateAction<boolean>>;
  item: HistoryItemType;
};

export default function HistoryItem({
  setCardModal,
  setIntervalModal,
  item
}: HistoryItemProps) {
  const {img, date, name, price, disabled} = item;

  return (
    <div className={styles.container} >
      <div className={styles.imageBox} >
        <img src={img} alt='' />
      </div>
      <div className={styles.infoBox} >
        <div className={styles.date} >
          {date}
        </div>
        <div className={styles.name} >
          {name}
        </div>
        <div className={styles.priceBox} >
          <div className={styles.price} >
            {price}
          </div>
          <div className={styles.finished} >
            배송완료
          </div>
        </div>
        <div className={styles.buttonBox} >
          <button>리뷰쓰기</button>
          <button className={disabled ? styles.disabled : ''} onClick={() => setIntervalModal(true)}>정기구매</button>
          <button onClick={() => {setCardModal(true)}}>재구매</button>
        </div>
      </div>
    </div>
  );
}