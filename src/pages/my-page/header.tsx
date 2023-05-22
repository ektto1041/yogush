import Icon from '@mdi/react'
import { mdiCog } from '@mdi/js';
import { mdiBellOutline } from '@mdi/js';
import { mdiCartOutline } from '@mdi/js';
import styles from './header.module.css'

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon path={mdiCog} size={1} />
      </div>
      <div className={styles.title} >마이페이지</div>
      <div className={styles.buttonBox} >
        <div className={styles.button} >
          <Icon path={mdiBellOutline} size='100%' />
        </div>
        <div className={styles.button} >
          <Icon path={mdiCartOutline} size='100%' />
        </div>
      </div>
    </div>
  )
}