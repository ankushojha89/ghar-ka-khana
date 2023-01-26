import { useState } from "react";
import { appName } from "../../constant";
import { Link, useHref } from "react-router-dom";

const Title = () => (
  <Link title={appName} to="/" className="logo"> <span>&#127858;</span>{appName}</Link>
);

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = useHref();
  return (
    <div className="header">
      <Title />
      <div className="header-right">
        <Link className={ value=== "/" ?"active":""} to="/">Home</Link>
        <Link className={ value=== "/contact" ?"active":""} to="/contact">Contact</Link>
        <Link className={ value=== "/about" ?"active":""} to="/about">About</Link>
        <Link className={ value=== "/cart" ?"active":""} to="/cart">Cart</Link>
        {isLoggedIn ? (
          <Link onClick={() => setIsLoggedIn(false)}>
            Logout
          </Link>
        ) : (
          <Link onClick={() => setIsLoggedIn(true)}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
