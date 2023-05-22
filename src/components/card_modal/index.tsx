import Image from 'next/image';
import styles from './card_modal.module.css';
import { mdiCheckCircleOutline } from '@mdi/js';
import { useState } from 'react';
import Icon from '@mdi/react';

export default function CardModal() {
  const [isClicked, setClicked] = useState<boolean>(false);

  return (
    <div className={styles.container} >
      <div className={styles.box} >
        <div className={styles.title} >
          {isClicked ? '주문이 완료되었습니다.' : '카드를 선택해주세요.'}
        </div>
        {isClicked ? (
          <div className={styles.wrapper}>
            <div className={styles.icon} >
              <Icon path={mdiCheckCircleOutline} size="100%" />
            </div>
          </div>
        ) : (
          <div className={styles.cards} >
            <div className={styles.card} onClick={() => setClicked(true)}>
              <Image src={'/card_kakao.png'} alt='' fill />
            </div>
            <div className={styles.sub}>
              <Image src={'/card_kb.png'} alt='' fill />
            </div>
          </div>
        )}        
      </div>
    </div>
  );
};