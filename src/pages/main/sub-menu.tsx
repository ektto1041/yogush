import { subMenus } from '@/data/data';
import SubMenuItem from './sub-menu-item';
import styles from './sub-menu.module.css';

type SubMenuProps = {
  type: number;
};

export default function SubMenu({
  type
}: SubMenuProps) {
  return (
    <>
      <div className={styles.container} >
        {subMenus[type].map(m => (
          <SubMenuItem key={m.menu} menu={m} />
        ))}
      </div>
    </>
  )
}