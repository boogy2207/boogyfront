import axios from "axios";
import { getAllBooks, getBooksByTitle } from "./index";

export const getBooks = () => (dispatch) => {
  axios("https://boogyback-production.up.railway.app/books")
    .then((res) => dispatch(getAllBooks(res.data)))
    .catch((e) => console.log(e));
};

export const getByTitle = (title) => (dispatch) => {
  axios(
    `https://boogyback-production.up.railway.app/books/title?title=${title}`
  )
    .then((res) => dispatch(getBooksByTitle(res.data)))
    .catch((e) => console.log(e));
};
