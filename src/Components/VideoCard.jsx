import React from "react";

export default function VideoCard({ title, videoId }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-sm">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
          className="w-full h-full"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-[#07142b] mb-4 text-center">{title}</h2>
        <div className="text-center">
          <Button variant="secondary">Watch Now</Button>
        </div>
      </div>
    </div>
  );
}

function Button({ children, variant = "default", size = "default", className = "", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantStyles = {
    default: "bg-[#ffc85e] text-[#07142b] hover:bg-[#ffd78e]",
    secondary: "bg-[#ffc85e] text-[#07142b] hover:bg-[#ffd78e]",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };
  
  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant] || ""} ${sizeStyles[size] || ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
