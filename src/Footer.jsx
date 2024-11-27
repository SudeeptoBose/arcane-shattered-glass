const Footer = () => {
    return (
        <div className="fixed p-4 space-y-2 text-white
        lg:bottom-10 lg:right-10 lg:text-right
        bottom-10 left-4 text-left">
        <p className="text-xl">Scroll For Effect</p>
        <a
          className="block opacity-75 hover:opacity-100 transition-opacity duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://sudeepto-bose-portfolio.vercel.app/"
        >
          Developed By @SudeeptoBose
        </a>
      </div>
    );
  };
  
  export default Footer;