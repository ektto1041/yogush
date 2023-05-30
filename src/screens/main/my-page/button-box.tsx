import { useRouter } from 'next/router';
import styles from './button-box.module.css';

const buttons = [
  {name: '구매기록', path: '/my-page/history', },
  {name: '대리구매', path: '/my-page/proxy', },
  {name: '정기구매', },
  {name: '포인트', },
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