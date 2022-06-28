function Article(props) {
  const { title, body, createdAt } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{createdAt.toString()}</p>
    </div>
  );
}

export default Article;

//Belajar Props
// function Article(props) {
//
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.body}</p>
//       <p>{props.createdAt.toString()}</p>
//     </div>
//   );
// }

// export default Article;

// function Article({title, body, createdAt}) {
//
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{body}</p>
//       <p>{createdAt.toString()}</p>
//     </div>
//   );
// }

// export default Article;
