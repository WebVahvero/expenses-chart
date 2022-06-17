import logo from "./images/logo.svg"

function Header() {
  return (
    <header>
      <div className="balance">
        <p>My balance</p>
        <h2>$921.48</h2>
      </div>
      <img src={logo} alt="logo" />
    </header>
  );
}

export default Header;
