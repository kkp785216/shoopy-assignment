const NotificationIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M19.25 16.37h-.05a.2.2 0 0 1-.2-.2v-5.55c0-3.17-2.11-5.85-5.01-6.71A2 2 0 0 0 12 2a2 2 0 0 0-1.99 1.91C7.11 4.77 5 7.45 5 10.62v5.55a.2.2 0 0 1-.2.2h-.05a.749.749 0 1 0 0 1.5h14.5a.749.749 0 1 0 0-1.5zm-4.9 3.15h-4.7c-.23 0-.37.25-.26.45A2.98 2.98 0 0 0 12 21.52c1.13 0 2.11-.63 2.61-1.55.11-.21-.03-.45-.26-.45z"></path>
    </svg>
  );
};

export default NotificationIcon;
