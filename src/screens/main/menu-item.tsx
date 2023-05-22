import styles from './menu-item.module.css';

type MenuItemProps = {
  menu: string;
};

export default function MenuItem({
  menu
}: MenuItemProps) {
  return (
    <>
      <div className={`${styles.container}${menu === '추천' ? ' '+styles.selected : ''}`}>
        {menu}
      </div>
    </>
  );
}