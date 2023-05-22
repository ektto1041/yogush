import { useRouter } from 'next/router';
import styles from './nav_bar.module.css';
import { mdiHome } from '@mdi/js';
import { mdiMenu } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';

export default function NavBar() {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <div className={`${styles.icon}${router.pathname === '/' ? ` ${styles.selected}` : ''}`} onClick={() => router.push('/')} >
          <Icon path={mdiHome} size='100%' />
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.icon} >
          <Icon path={mdiMenu} size='100%' />
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.icon} >
          <Icon path={mdiMagnify} size='100%' />
        </div>
      </div>
      <div className={styles.button}>
        <div className={`${styles.icon}${router.pathname.indexOf('/my-page') >= 0 ? ` ${styles.selected}` : ''}`} onClick={() => router.push('/my-page')} >
          <Icon path={mdiAccount} size='100%' />
        </div>
      </div>

    </div>
  )
}