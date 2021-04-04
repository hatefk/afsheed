import React from "react";
// import Hdr from "./../hdr/hdr.component";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../common/styles/index";
import "./app.component.css";
// import Home from "../../pages/home/home";
// import About from "../../pages/about/about";
// import { ApolloProvider } from "@apollo/client";
// import client from "./../../common/apollo-client";
// import NewPost from "../../pages/newPost/newPost";
import logo from "./logo.svg";
// import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function Root() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Root);

// function Root() {
//   return (
//     <ApolloProvider client={client}>
//       <>
//         {/* <p>
//           This project is being built on top of{" "}
//           <a href="https://www.youtube.com/watch?v=lXtdDx9RGzM">
//             this example.
//           </a>
//         </p> */}

//         <BrowserRouter>
//           <Hdr />
//           <Switch>
//             <Route path="/newpost">
//               <NewPost />
//             </Route>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </BrowserRouter>
//       </>
//     </ApolloProvider>
//   );
// }

// export default Root;
