import Image from 'next/Image';
import randomPhotoProfile from './../../utils/randomPhotoProfile';
import photo1 from './../../public/images/profile-photos/1.jpeg';
import photo2 from './../../public/images/profile-photos/2.jpeg';
import photo3 from './../../public/images/profile-photos/3.jpeg';
import photo4 from './../../public/images/profile-photos/4.jpeg';
import photo5 from './../../public/images/profile-photos/5.jpeg';
import styles from './styles.module.scss';

const UserDetails = ({ user }) => {
  const { name, username, phone, email, website, address, company } = user;
  const profilePhotos = [photo1, photo2, photo3, photo4, photo5];

  return (
    <div className={styles.wrapperUserCard}>
      <Image src={randomPhotoProfile(profilePhotos)} alt={'photo'} className={styles.photoProfile}/>
      <div className={styles.userInformation}>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Phone number: {phone}</p>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  );
  const users = await result.json();
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }))
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
  console.log('result', result)
  const user = await result.json();

  return {
    props: {
      user,
    },
  };
}

export default UserDetails;
