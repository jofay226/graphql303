"use client";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_BOTH = gql`
  query GetBoth {
    books {
      title
      author
    }
    users {
      id
      name
      email
    }
  }
`;
export default function Home() {
  const { data } = useQuery(GET_BOTH);
  console.log(data);

  return <>fds</>;
}
