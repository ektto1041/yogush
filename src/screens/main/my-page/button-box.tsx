import { useRouter } from 'next/router';
import styles from './button-box.module.css';

const buttons = [
  {name: '구매기록', path: '/my-page/proxy', },
  {name: '구매기록', },
  {name: '구매기록', },
  {name: '구매기록', },
]

export default function ButtonBox() {
  const router = useRouter();

  return (
    <div className={styles.container} >
      {buttons.map(b => (
        <div key={b.name} className={styles.button} onClick={() => router.push(b.path as string)} >
          {b.name}
        </div>
      ))}
    </div>
  )
}