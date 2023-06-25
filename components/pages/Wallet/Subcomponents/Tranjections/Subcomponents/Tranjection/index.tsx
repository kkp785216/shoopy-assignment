import { TranjectionsType } from "@/type/DataTypes";

type Props = {
  entry: TranjectionsType;
};

const Tranjection = ({ entry }: Props) => {
  return (
    <div className="flex justify-between space-x-4 my-5 border border-[#e7e7e7] border-solid px-3 py-4 rounded-xl">
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-gray-500 rounded-full overflow-hidden"></div>
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
