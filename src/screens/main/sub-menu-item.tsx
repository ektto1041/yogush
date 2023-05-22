import Icon from '@mdi/react';
import styles from './sub-menu-item.module.css';
import { SubMeunItemType } from '@/data/data';

type SubMenuItemProps = {
  menu: SubMeunItemType;
};

export default function SubMenuItem({
  menu,
}: SubMenuItemProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon}>
          <Icon path={menu.icon} size='100%' />
        </div>
        <div className={styles.name}>
          {menu.menu}
        </div>
      </div>
    </>
  );
}