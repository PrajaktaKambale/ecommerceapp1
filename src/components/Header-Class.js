const Header = (props) => {
  return (
    <div className="header">
      <h4>{props.title}</h4>
      <h4>{props.subtitle}</h4>
    </div>
  );
};
export default Header;
