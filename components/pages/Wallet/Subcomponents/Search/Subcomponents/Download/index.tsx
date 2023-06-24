import { useRouter } from "next/router";
import DownloadIcon from "./assets/DownloadIcon";

const Download = () => {
  /* push: router.push - navigate to given page */
  const { push } = useRouter();
  return (
    <button
      onClick={() => push("/activities/statements")}
      className="p-4 rounded-full bg-[#f7f5f0] border border-solid border-transparent focus:border-[#56ccfe] focus:shadow-[0_0_0_2px_#56ccfe]"
    >
      <DownloadIcon className="w-5 h-5" />
    </button>
  );
};

export default Download;
