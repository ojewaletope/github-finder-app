const footerYear = new Date().getFullYear;

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <p>Copyright &copy; {footerYear}</p>
    </footer>
  );
};
