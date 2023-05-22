import { rcItemType } from '@/data/data';
import styles from './rc-item.module.css';
import Image from 'next/image';

type rcItemProps = {
  rcItem: rcItemType;
};

export default function RecommendationItem({
  rcItem,
}: rcItemProps) {
  return (
    <div className={styles.container} >
      <div className={styles.img} >
        <Image src={rcItem.img} alt='' width={340} height={150} />
      </div>
      <div className={styles.priceBox} >
        <div className={styles.sale} >{rcItem.sale}%</div>
        <div className={styles.price} >{rcItem.price}원</div>
      </div>
      <div className={styles.name} >
        {rcItem.name}
      </div>
    </div>
  )
}