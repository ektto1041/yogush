import Image from 'next/image';
import styles from './interval_modal.module.css';
import { mdiCheckCircleOutline } from '@mdi/js';
import { useState } from 'react';
import Icon from '@mdi/react';

type IntervalmodalProps = {
  finishInterval: () => void;
};

export default function IntervalModal({
  finishInterval,
}: IntervalmodalProps) {
  const [interval, setInterval] = useState<number>(1);

  return (
    <div className={styles.container} >
      <div className={styles.box} >
        <div className={styles.title} >
          주기를 선택해주세요.
        </div>
        <div className={styles.contentBox} >
          <div className={styles.content} >
            {[1,2,3,4].map(i => (
              <div key={i} className={`${styles.interval}${i === interval ? ' ' + styles.selected : ''}`} onClick={() => setInterval(i)} >
                {i}달에 한 번
              </div>
            ))}
          </div>
        </div>
        <button onClick={finishInterval}>주문</button>
      </div>
    </div>
  );
};