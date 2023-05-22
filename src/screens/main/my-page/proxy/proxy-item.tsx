import styles from './proxy-item.module.css';
import { mdiPlayCircle } from '@mdi/js';
import { mdiStopCircle } from '@mdi/js';
import Icon from '@mdi/react';
import { Dispatch, SetStateAction, useState } from 'react';

export type ProxyItemType = {
  name: string;
  record: string;
  previous: string[];
};

type ProxyItemProps = {
  setCardModal: Dispatch<SetStateAction<boolean>>;
  item: ProxyItemType;
};

export default function ProxyItem({
  setCardModal,
  item
}: ProxyItemProps) {
  const [isPlay, setPlay] = useState<boolean>(false);

  const handleClickPlay = () => {
    if(isPlay) return;
    setPlay(true);
    setTimeout(() => {
      setPlay(false);
    }, 3000);
  }

  return (
    <div className={styles.container} >
      <div className={styles.name} >
        {item.name} 님
      </div>
      <div className={styles.main} >
        {item.record}
        <div className={styles.icon} onClick={handleClickPlay} >
          {isPlay ? (
            <Icon path={mdiStopCircle} size='100%' />
          ) : (
            <Icon path={mdiPlayCircle} size='100%' />
          )}
        </div>
      </div>
      <div className={styles.sub} >
        <div className={styles.content} >
          <h1>같은 요청에 대해 구매했던 상품입니다.</h1>
          {item.previous.map(p => (
            <h2 key={p}>{p}</h2>
          ))}
          <div className={styles.buttonBox} >
            <div className={styles.button} onClick={() => setCardModal(true)} >
              원클릭 구매
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}