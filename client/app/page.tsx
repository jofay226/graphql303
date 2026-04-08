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
  const { data } = useQuery(GET_BOOKS);
  console.log(data);

  return <>fds</>;
}
