import React from "react";
import { Link } from 'react-router-dom'
import Container from "../Container/Container";


function NavigationBar() {
  return <nav className="p-6 xl:px-0">
   <Container className="flex justify-between align-middle">
      <div>
        candydate
      </div>
      <div className="flex gap-6 align-middle">
        <div>
          <Link to="/">sign in</Link> or <Link to="/register">register</Link>
        </div>
        <Link to="/employer">employer site</Link>
      </div>
   </Container>
    
  </nav>;
}

export default NavigationBar;
