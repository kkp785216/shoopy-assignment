import { TranjectionsType } from "@/type/DataTypes";

type Props = {
  entry: TranjectionsType;
};

const Tranjection = ({ entry }: Props) => {
  return (
    <div className="flex justify-between my-5 border border-[#e7e7e7] border-solid px-3 py-4 rounded-xl">
      <div className="flex space-x-3">
        <div className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden"></div>
        <div>
          <h3 className="text-lg font-medium">{entry.name}</h3>
          <span className="text-sm">
            {"June 22"} . {entry.type}
          </span>
        </div>
      </div>
      <div>
        <span className="text-lg font-medium">${entry.amount}</span>
      </div>
    </div>
  );
};

export default Tranjection;
