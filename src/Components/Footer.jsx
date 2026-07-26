import { Twitter, Facebook, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#001326] text-white relative flex justify-center items-center">
    <div className="max-w-4xl">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Logo and company info section */}
          <div className="lg:col-span-3 space-y-8">
            <div className="transform hover:scale-105 transition-transform duration-300">
              {/* <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20214655-ydjgtLHtydapBy6die4ELA3RncA9Mm.png"
                alt="RESUMIFY Logo"
                width={95}
                height={32}
                className="brightness-110"
              /> */}
              <p className="text-xl text-semibold">RESUMIFY</p>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              We share knowledge, tips, and tools to help everyone find their dream job.
            </p>
            <button><a onClick={() => navigate('/create-resume')} className="bg-[#FCD34D] hover:bg-[#fbbf24] text-black text-xs rounded-full px-3 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(252,211,77,0.3)] active:scale-95">
              Create My Resume
            </a></button>
            
            <div className="flex gap-6  items-center">
              {[{ icon: Twitter, href: "#" }, { icon: Facebook, href: "#" }, { icon: Linkedin, href: "#" }].map(
                (social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-white/80 hover:text-[#FCD34D] transition-all duration-300 transform hover:scale-110"
                    aria-label={`Follow us on ${social.icon.name}`}
                  >
                    <social.icon size={22}/>
                  </a>
                )
              )}
            </div>
            <div className="space-y-3 text-sm">
              <div className="group flex items-center gap-2">
                <span className="text-[#94A3B8]">Call us:</span>
                <a
                  href="tel:800-985-7561"
                  className="text-white group-hover:text-[#FCD34D] transition-colors duration-300"
                >
                  800-985-7561
                </a>
              </div>
              <div className="group flex items-center gap-2">
                <span className="text-[#94A3B8]">Email:</span>
                <a
                  href="mailto:support@RESUMIFY.com"
                  className="text-white group-hover:text-[#FCD34D] transition-colors duration-300"
                >
                  support@RESUMIFY.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                title: "RESUME",
                links: ["Resume Builder", "Resume Templates", "Resume Examples", "How to Write a Resume"],
              },
              {
                title: "Credits",
                links: ["Anant Hansras", "Yash Pratap", "Shiv Pratap", "Yaduvar Kansal"],
              },
              {
                title: "SUPPORT",
                links: ["About", "FAQ", "Contact", "Privacy Policy", "Terms of service", "Cookies Policy"],
              },
            ].map((column, index) => (
              <div key={index} className="relative">
                <h3 className="text-[#94A3B8] font-medium mb-6 tracking-wider">{column.title}</h3>
                <ul className="space-y-4">
  {column.links.map((link, i) => {
    const pathMap = {
      "Resume Builder": "/create-resume",
      "Resume Templates": "/templates",
      "Resume Examples": "/example-resume",
      "How to Write a Resume": "/tut1",

      "Anant Hansras": "/credits/anant",
      "Shiv Pratap": "/credits/shiv",
      "Yash Pratap": "/credits/yash",
      "Yaduvar Kansal": "/credits/yaduvar",

      "About": "/about",
      "FAQ": "/faq",
      "Contact": "/contact-us",
      "Privacy Policy": "/create-resume",
      "Terms of service": "/create-resume",
      "Cookies Policy": "/create-resume",
    };

    return (
      <li key={i}>
        <a
          onClick={() => navigate(pathMap[link] || "/")}
          className="inline-block text-white hover:text-[#60A5FA] transition-all duration-300 transform hover:translate-x-1 cursor-pointer"
        >
          {link}
        </a>
      </li>
    );
  })}
</ul>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#60A5FA]/20 to-transparent" />
    </div>
      {/* Subtle gradient overlay */}
      
    </footer>
  );
};

export default Footer;

  