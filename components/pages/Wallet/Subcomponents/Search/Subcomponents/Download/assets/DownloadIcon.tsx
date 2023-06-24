const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M20.34 13.53h-.22c-.35 0-.64.29-.64.64v4.05c0 .69-.49 1.25-1.08 1.25H5.58c-.6 0-1.08-.56-1.08-1.25v-4.05c0-.35-.29-.64-.64-.64h-.22c-.35 0-.64.29-.64.64v4.05c0 1.52 1.16 2.75 2.58 2.75h12.81c1.42 0 2.58-1.23 2.58-2.75v-4.05a.63.63 0 0 0-.63-.64z"></path>
      <path d="M11.58 16.53c.23.23.61.23.84 0l4.55-4.51c.38-.37.11-1.02-.42-1.02h-1.8V3.91c0-.5-.41-.91-.91-.91h-3.68c-.5 0-.91.41-.91.91V11h-1.8c-.53 0-.8.65-.42 1.02l4.55 4.51z"></path>
    </svg>
  );
};

export default DownloadIcon;
