import Link from "next/link";
import styles from './styles.module.scss';

const Header = ({}) => {
  return (
    <div className={styles.headerWrapper}>
      <nav className={styles.headerNav}>
        <Link href="/users">
          <a>Users</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/comments">
          <a>Comments</a>
        </Link>
        <Link href="/photos">
          <a>Photos</a>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
