import { Link } from "react-router";
import logoPng from "../assets/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#071D2D] text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Top row: brand left, social right */}
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoPng} alt="Hero.IO Logo" className="h-6 w-auto" />
            <span className="text-white font-semibold tracking-wide">HERO.IO</span>
          </Link>

          <div className="text-right">
            <h6 className="text-lg font-medium">Social Links</h6>
            <div className="mt-3 flex items-center justify-end gap-3">
              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="btn btn-circle btn-sm bg-white text-black border-0 hover:bg-white/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M4 4l16 16M20 4L4 20" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="btn btn-circle btn-sm bg-white text-black border-0 hover:bg-white/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.06c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.15V24h-4v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.8 1.87-2.8 3.8V24h-4V8z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="btn btn-circle btn-sm bg-white text-black border-0 hover:bg-white/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24H12.82v-9.294H9.692V11.06h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.59l-.467 3.646h-3.123V24h6.127C23.407 24 24 23.406 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-white/20" />

        {/* Bottom copyright */}
        <p className="text-center text-sm text-white/80">
          Copyright © {year} - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;