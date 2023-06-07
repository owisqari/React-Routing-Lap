import { useParams } from "react-router-dom";

interface IBookPageProps {
  title: string;
  author: string;
}
const BookPage = (props: IBookPageProps) => {
  const { id } = useParams();

  return (
    <>
      <h1>Book Page</h1>
      <p>Book Page</p>
      <p>Book ID: {id}</p>
      <p>Book Title: {props.title}</p>
      <p>Book Author: {props.author}</p>
    </>
  );
};

export default BookPage;
