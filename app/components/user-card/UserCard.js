import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

const UserCard = ({ name, username, id }) => {
  return (
    <Link href={`/users/${id}`}>
      <button className={styles.button}>
        {/* <Image src="/vercel.svg" alt="User photo" width={72} height={16} /> */}
        {name}
      </button>
    </Link>
  );
};

export default UserCard;
 