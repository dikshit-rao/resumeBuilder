import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Menu,X,FileText, Layout, Info, HelpCircle, Mail, FilePlus, ClipboardList, Settings2 } from "lucide-react";
import { logout } from "../Services/userAPI";
import { useDispatch } from "react-redux";

const navItems1 = [
  {
    name: "Resume",
    href: "/templates",
    dropdownItems: [
      {
        name: "Templates",
        icon: Layout, // Represents structured document layouts, fitting for resume templates
        description: "Browse  templates to craft your perfect resume.",
        href: "/templates"
      },
      { 
        name: "Resume Examples", 
        icon: ClipboardList, // Represents lists or examples of resumes
        description: "Explore industry-specific resume samples for inspiration.", 
        href: "/example-resume" 
      }
    ],
  },
  {
    name: "Tutorials",
    href: "/tut1",
    dropdownItems: [
      { 
        name: "Content Writing", 
        icon: FileText, // Represents writing and text-related content
        description: "Master the art of crafting impactful resume content.", 
        href: "/tut1" 
      },
      { 
        name: "Design & Formatting", 
        icon: Layout, // Represents structuring and formatting
        description: "Learn how to structure and style your resume for maximum impact.", 
        href: "/tut2" 
      },
    ],
  },
  {
    name: "About",
    href: "/about",
    dropdownItems: [
      { 
        name: "About Section", 
        icon: Info, // Represents information about the platform
        description: "Learn more about our platform and mission.", 
        href: "/about" 
      },
      { 
        name: "FAQ's", 
        icon: HelpCircle, // Common icon for FAQs or help sections
        description: "Find answers to common questions about our services.", 
        href: "/faq" 
      },
      { 
        name: "Contact Us", 
        icon: Mail, // Represents communication or contact
        description: "Get in touch with our support team for assistance.", 
        href: "/contact-us" 
      },
    ],
  },
  
];

const navItems2 = [
  {
    name: "Resume",
    href: "/create-resume",
    dropdownItems: [
      { 
        name: "Create Resume", 
        icon: FilePlus, // Symbolizes adding or creating a new document
        description: "Choose from professional templates and build your resume.", 
        href: "/create-resume" 
      },
      {
        name: "Templates",
        icon: Layout, // Represents structured document layouts, fitting for resume templates
        description: "Browse  templates to craft your perfect resume.",
        href: "/templates"
      },
      { 
        name: "Resume Examples", 
        icon: ClipboardList, // Represents lists or examples of resumes
        description: "Explore industry-specific resume samples for inspiration.", 
        href: "/example-resume" 
      },
      { 
        name: "Your Resumes", 
        icon: FileText, // Represents lists or examples of resumes
        description: "You can see and download all your created resumes here", 
        href: "/your-resume" 
      },
    ],
  },
  {
    name: "Tutorials",
    href: "/tut1",
    dropdownItems: [
      { 
        name: "Content Writing", 
        icon: FileText, // Represents writing and text-related content
        description: "Master the art of crafting impactful resume content.", 
        href: "/tut1" 
      },
      { 
        name: "Design & Formatting", 
        icon: Layout, // Represents structuring and formatting
        description: "Learn how to structure and style your resume for maximum impact.", 
        href: "/tut2" 
      },
    ],
  },
  {
    name: "About",
    href: "/about",
    dropdownItems: [
      { 
        name: "About Section", 
        icon: Info, // Represents information about the platform
        description: "Learn more about our platform and mission.", 
        href: "/about" 
      },
      { 
        name: "FAQ's", 
        icon: HelpCircle, // Common icon for FAQs or help sections
        description: "Find answers to common questions about our services.", 
        href: "/faq" 
      },
      { 
        name: "Contact Us", 
        icon: Mail, // Represents communication or contact
        description: "Get in touch with our support team for assistance.", 
        href: "/contact-us" 
      },
    ],
  },
  
];


const Navbar = () => {
  
const storedToken = localStorage.getItem("token");
const token = storedToken ? JSON.parse(storedToken) : null;
  let navItems = navItems1;
  if(token){
    navItems = navItems2;
  }
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {

  },[token])
  const handleLogout = async () =>{
    dispatch(logout(navigate));
  }
  const navigate = useNavigate()
  return (
    <nav className="bg-[#f9faff] w-full text-[#07142b] border-[#07142b30]  shadow-md border-b-2 fixed z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a onClick={() => navigate('/')} className="flex items-center">
              <span className="text-2xl font-bold text-[#0c1986] cursor-pointer">RESUMIFY</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center justify-end">
            {navItems.map((item) => (
              <div key={item.name} className="relative mx-4 group " >
                <a
                  onClick={() => navigate(item.href)}
                  style={{ fontFamily: "'jaro', cursive" }}
                  className="px-3 py-2 rounded-md cursor-pointer  text-base text-[#07142b] hover:text-[#0070d6] transition-colors duration-200"
                >
                  {item.name}
                </a>
                {/* Dropdown Menu */}
                {item.dropdownItems && (
                  <div style={{ fontFamily: "'jaro', cursive" }} className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                    <div className="p-4 space-y-4">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a 
                          key={dropdownItem.name}
                          onClick={() => navigate(dropdownItem.href)}
                          className="flex items-start space-x-3 group/item cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors duration-200"
                        >
                          {dropdownItem.icon && (
                            <div className="mt-1">
                              <dropdownItem.icon className="h-5 w-5 text-gray-400 group-hover/item:text-[#0070d6]" />
                            </div>
                          )}
                          <div>
                            <p className="text-sm font-medium text-[#07142b] group-hover/item:text-[#0070d6]">
                              {dropdownItem.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">{dropdownItem.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Login Button */}
            {
              !token ? (<button onClick={() => {navigate('/login')}} className="ml-2 px-6 py-2 bg-[#1a1f71] text-white rounded-full hover:bg-[#0070d6] transition-colors duration-200 text-sm font-medium">
              Login
            </button>) : (<button onClick={handleLogout} className="ml-2 px-6 py-2 bg-[#1a1f71] text-white rounded-full hover:bg-[#0070d6] transition-colors duration-200 text-sm font-medium">
              Logout
            </button>)
            }
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#07142b] hover:text-[#0070d6] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <a
                  onClick={() => navigate(item.href)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-[#07142b] hover:text-[#0070d6]"
                >
                  {item.name}
                </a>
                {item.dropdownItems && (
                  <div className="pl-6 space-y-2">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        
                        onClick={() =>{navigate(dropdownItem.href);setIsOpen(false);}}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-500 hover:text-[#0070d6]"
                      >
                        <dropdownItem.icon className="h-4 w-4" />
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
           <button
            onClick={() => {
              setIsOpen(false);
              navigate('/login');
            }}
            className="w-full mt-4 px-6 py-2 bg-[#1a1f71] text-white rounded-full hover:bg-[#0070d6] transition-colors duration-200 text-sm font-medium"
          >
            Login
          </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

