import styles from './delivery-status.module.css';
import Status, { StatusProps } from './status';
import { mdiCreditCardCheckOutline } from '@mdi/js';
import { mdiPackageVariantPlus } from '@mdi/js';
import { mdiTruckOutline } from '@mdi/js';
import { mdiHandshakeOutline } from '@mdi/js';

const statusList: StatusProps[] = [
  {icon: mdiCreditCardCheckOutline, name: '입금/결제', number: 0},
  {icon: mdiPackageVariantPlus, name: '배송준비중', number: 1},
  {icon: mdiTruckOutline, name: '배송중', number: 1},
  {icon: mdiHandshakeOutline, name: '배송완료', number: 0},
]

export default function DeliveryStatus() {
  return (
    <div className={styles.container} >
      <div className={styles.content} >
        <div className={styles.title} >
          나의 주문/배송현황
        </div>
        <div className={styles.status} >
          {statusList.map(s => (
            <Status key={s.name} icon={s.icon} name={s.name} number={s.number} />
          ))}
        </div>
      </div>
    </div>
  )
}