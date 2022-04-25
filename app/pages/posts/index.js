const Posts = ({ postsData }) => {
    return(
        <div>{postsData.map((post) => <p>{post.title}</p>)}</div>
    )
}

export async function getServerSideProps() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsData = await result.json();
  
    return {
      props: {
        postsData,
      },
    };
}
  
export default Posts;