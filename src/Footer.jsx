const Footer = () => {
  return (
    <div className="fixed p-4 w-full bottom-10">
      <div className="flex lg:flex-row flex-col lg:justify-between items-end gap-2">
        <div className="lg:block hidden lg:left-12 left-4">
          <a
            className="text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.netflix.com/title/81435684"
          >
            Watch Arcane on Netflix
          </a>
        </div>
        <div className="text-white text-right space-y-2 lg:right-12 right-4">
          <p className="text-xl">Scroll For Effect</p>
          <a
            className="block opacity-75 hover:opacity-100 transition-opacity duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://sudeepto-bose-portfolio.vercel.app/"
          >
            Developed By @SudeeptoBose
          </a>
          <a
            className="lg:hidden block opacity-75 hover:opacity-100 transition-opacity duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.netflix.com/title/81435684"
          >
            Watch Arcane on Netflix
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;