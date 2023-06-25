const CloseButtonIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 18 18"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0zm-5.061-2.79a.65.65 0 0 1 .92.919l-1.93 1.929 1.889 1.889a.65.65 0 1 1-.92.919L9.01 9.977l-1.89 1.89a.65.65 0 0 1-.919-.92l1.89-1.89-1.93-1.929a.65.65 0 0 1 .92-.919l1.929 1.93 1.929-1.93z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default CloseButtonIcon;
