import UserCard from "../../components/user-card/UserCard";
import styles from "./styles.module.scss";

const Users = ({ usersData }) => {
  return (
    <div className={styles.wrapperUsersCards}>
      {usersData.map((user) => (
        <UserCard key={user.id} name={user.name} username={user.username} id={user.id} />
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await result.json();

  return {
    props: {
      usersData,
    },
  };
}

export default Users;
