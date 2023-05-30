import Icon from '@mdi/react'
import { mdiAccountBox } from '@mdi/js';
import { mdiBellOutline } from '@mdi/js';
import { mdiCartOutline } from '@mdi/js';
import styles from './header.module.css'
import { Dispatch, SetStateAction } from 'react';

type headerProps = {
  setAlarm: Dispatch<SetStateAction<boolean>>;
};

export default function Header({
  setAlarm
}: headerProps) {
  const onClickCartButton = () => {
    setTimeout(() => setAlarm(true), 3000);
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <img src='/logo.png' alt='' />
        </div>
      </div>
      <input className={styles.search} placeholder='검색어를 입력해 주세요.' />
      <div className={styles.buttonBox} >
        <div className={styles.button} >
          <Icon path={mdiBellOutline} size='100%' />
        </div>
        <div className={styles.button} onClick={onClickCartButton} >
          <Icon path={mdiCartOutline} size='100%' />
        </div>
      </div>
    </div>
  )
}