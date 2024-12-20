import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Add custom font using CSS
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'BrokenGlass';
        src: url('/BrokenGlass.ttf') format('truetype');
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return (
    <div className="fixed p-4 lg:px-12 w-full bottom-10">
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
          <p className="text-4xl" style={{fontFamily: 'BrokenGlass', color: 'mediumpurple'}}>Scroll to Shatter</p>
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