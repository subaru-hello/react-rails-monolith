import React, { useState } from "react";
import { default as UUID } from "node-uuid";

const PostLists = ({ books = [] }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <Post title={book.title} author={book.author} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Post = (props) => {
  return (
    <>
      <td>{props.title}</td>
      <td>{props.author}</td>
    </>
  );
};

const PostForm = () => {
  const [formData, setFormData] = useState({ title: "", author: "" });
  const [books, setBooks] = useState([]);
  const saveBook = async (e) => {
    e.preventDefault();
    setBooks([...books, { ...formData, id: UUID.v4() }]);
    setFormData({ title: "", author: "", id: "" });
  };

  return (
    <div>
      <form>
        <label>Title:</label>
        <input
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          name="title"
          value={formData.title}
        />
        <label>Author:</label>
        <input
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          name="author"
          value={formData.author}
        />
        <button onClick={(e) => saveBook(e)}>Submit</button>
      </form>

      <PostLists books={books} />
    </div>
  );
};

export default function Index() {
  const [books, setBooks] = useState([]);

  const [action, setAction] = useState("list");
  const [formData, setFormData] = useState({ title: "", author: "" });

  const editBook = (id) => {
    const currentBook = books.find((book) => book.id == id);
    setCurrentBookId(id);
    setFormData({
      ...formData,
      title: currentBook.title,
      author: currentBook.author,
    });
    setAction("form");
  };

  // 本データを保存している。

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id != id));
  };

  return (
    <>
      <h1>Books {books.length}</h1>
      <PostLists />
      <PostForm />
    </>
  );
}
