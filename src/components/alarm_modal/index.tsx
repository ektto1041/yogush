import Image from 'next/image';
import styles from './alarm_modal.module.css';
import { mdiCheckCircleOutline } from '@mdi/js';
import { useState } from 'react';
import Icon from '@mdi/react';
import { useRouter } from 'next/router';

export default function AlarmModal() {
  const router = useRouter();

  return (
    <div className={styles.container} >
      <div className={styles.box} >
        <div className={styles.title} >
          배송이 완료되었습니다.
        </div>
        <div className={styles.imageBox}>
          <img src={'https://i.namu.wiki/i/dTxWry1hO7uw43fr05d2krIZhQH_-fAoqSpBqkQHdDoV-baWRZKj9hf4b-A0fhynBv7fGT6lr5Fm2y2uFzICuQ.webp'} alt='' />
        </div>
        <h1 onClick={() => router.push('/my-page/history')}>지금 리뷰 쓰러가기</h1>
        <h2>다음에 쓰기</h2>
      </div>
    </div>
  );
};