import f1 from '../assets/Format of Resume/F1.jpg';
import f2 from '../assets/Format of Resume/F2.jpg';
import f3 from '../assets/Format of Resume/F3.jpg';
import f4 from '../assets/Format of Resume/F4.jpg';
import f5 from '../assets/Format of Resume/F5.jpg';
import f6 from '../assets/Format of Resume/F6.jpg';
import f7 from '../assets/Format of Resume/F7.jpg';
import f8 from '../assets/Format of Resume/F8.jpg';

const resumeExamples = [
  {
    sector: "Healthcare",
    description: "Optimized for healthcare professionals, including medical administrators and hospital managers.",
    image: f2,
    pdf: "resumes/f2.pdf",
  },
  {
    sector: "Graphic Design",
    description: "A great fit for creative professionals, including UI/UX designers, illustrators, and branding experts.",
    image: f7,
    pdf: "resumes/f7.pdf",
  },
  {
    sector: "Finance",
    description: "Designed for finance professionals such as investment analysts, accountants, and financial advisors.",
    image: f3,
    pdf: "resumes/f3.pdf",
  },
  {
    sector: "Education",
    description: "Perfect for educators, academic coordinators, and school administrators.",
    image: f4,
    pdf: "resumes/f4.pdf",
  },
  {
    sector: "Marketing",
    description: "Tailored for marketing strategists, brand managers, and digital marketing specialists.",
    image: f5,
    pdf: "resumes/f5.pdf",
  },
  {
    sector: "Engineering",
    description: "Ideal for engineers in civil, mechanical, electrical, and software domains.",
    image: f6,
    pdf: "resumes/f6.pdf",
  },
  
  {
    sector: "Software Engineering",
    description: "Crafted for software developers, full-stack engineers, and IT specialists.",
    image: f8,
    pdf: "resumes/f8.pdf",
  },
  {
    sector: "Technology & DevOps",
    description: "Best suited for cloud engineers, system architects, and DevOps professionals.",
    image: f1,
    pdf: "resumes/f1.pdf",
  },
];


export default function ResumeExamples() {
  return (
    <div className="min-h-screen bg-[#f9faff] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#07142b] mb-12">
        Industry-Specific <span className="text-[#ffc85c]">Resume</span> Examples
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeExamples.map((example, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative">
                <img
                  src={example.image || "/placeholder.svg"}
                  alt={`${example.sector} Resume Example`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
  href={example.pdf}
  download
  className="bg-[#ffc85e] hover:bg-[#ffd78e] text-[#07142b] font-bold py-2 px-4 rounded-full transition-colors duration-300"
>
  Download Resume
</a>

                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#07142b] group-hover:text-[#0070d6] transition-colors duration-300">
                  {example.sector}
                </h2>
                <p className="mt-2 text-[#46464e]">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

