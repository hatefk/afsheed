import React, { useState, useEffect } from "react";
import PostGrid from "../../components/posts-grid/post-grid.component";
import "./App.css";
import { API } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  // TODO: Import correct mutations and queries from graphql mutations and queries
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const initialFormState = { name: "", description: "" };

function Home() {
  const myLocalTestPostList = [
    { id: 1, name: "Hatef", size: "XL" },
    { id: 2, name: "Afrand", size: "s" },
    { id: 3, name: "Amithis", size: "xs" },
    { id: 4, name: "Liam", size: "xs" },
  ];

  // const realPosts = useGetPosts();

  return (
    <div>
      <div className="page-title">Home:</div>
      <PostGrid postList={/*realPosts || */ myLocalTestPostList} />
    </div>
  );
}

export default Home;
