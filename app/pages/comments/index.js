const Comments = ({ commentsData }) => {
  return (
    <div>
      {commentsData.map((post) => {
        return (
          <div>
            <h4>{post.userName}</h4>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentsData = await result.json();

  return {
    props: {
      commentsData,
    },
  };
}

export default Comments;
