"use client";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_BOOKS = gql`
  query BOOKS {
    books {
      title
      author
    }
  }
`;

export default function Home() {
  const { data: booksData } = useQuery(GET_BOOKS);
  const { data: usersData } = useQuery(GET_BOOKS);
  console.log(booksData);
  console.log(usersData);

  return <>fds</>;
}
