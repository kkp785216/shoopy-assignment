import React from "react";

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M20.21 17.544l-2.785-2.785a7.752 7.752 0 0 0 1.114-3.986C18.54 6.49 15.05 3 10.77 3S3 6.49 3 10.773c0 4.282 3.489 7.772 7.77 7.772a7.686 7.686 0 0 0 3.985-1.114l2.784 2.785a1.66 1.66 0 0 0 2.34 0l.33-.33a1.645 1.645 0 0 0 0-2.342zM4.723 10.773c0-3.334 2.714-6.05 6.047-6.05 3.332 0 6.047 2.716 6.047 6.05 0 3.333-2.715 6.049-6.047 6.049-3.333 0-6.047-2.716-6.047-6.05z"></path>
    </svg>
  );
};

export default SearchIcon;
