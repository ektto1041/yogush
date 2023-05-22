import MenuItem from './menu-item';
import styles from './menu.module.css';

const menus = ['추천', '파워딜', '팍팍세일', '여행박람회', '베스트', '요거시직구', '뷰티탑', '소문난마켓'];

export default function Menu() {
  return (
    <>
      <div className={styles.container} >
        {menus.map(m => (
          <MenuItem key={m} menu={m} />
        ))}
      </div>
    </>
  )
}