import "../css/Header.css";

function Header(props) {
  return (
    <div className="card-header">
      <h1 className="card-header-title header"> {props.children}</h1>
    </div>
  );
}

export default Header;
