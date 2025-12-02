import mbdsLogo from "/mbds_logo_transparent.svg";

function Header() {
  const title = "Introduction à React";
  const subTitle = "A la découverte des premières notions de React";

  return (
    <header className="w-full flex flex-col">
      <div className="w-full flex justify-center">
        <img src={mbdsLogo} alt="MBDS" className="img-fluid"/>
      </div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </header>
  );
}

export default Header;