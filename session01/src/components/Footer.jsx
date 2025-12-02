function Footer() {
  const anneeCourante = new Date().getFullYear();

  return (
    <footer>
      <p>© {anneeCourante} - LAFLEUR Stanley</p>
    </footer>
  );
}

export default Footer;