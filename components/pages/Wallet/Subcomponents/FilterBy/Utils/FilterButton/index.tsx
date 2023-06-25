import { ChangeEvent, RefObject, useRef, useState } from "react";
import CloseButtonIcon from "./assets/CloseButtonIcon";
import { useFocusedState } from "./hooks/useFocusedState";
import {
  paymentDates,
  paymentTypes,
  paymentStatus,
} from "@/lib/structure/structure";

type Props = {
  title: string;
  activeFilter: string | null;
  filterList: typeof paymentStatus | typeof paymentTypes | typeof paymentDates;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onReset?: () => void;
  children?: React.ReactNode;
};

const FilterButton = ({
  title,
  activeFilter,
  filterList,
  onChange,
  onReset,
  children,
}: Props) => {
  const focusRef = useRef<HTMLDivElement>(null);
  const { toggleFocus, isFocused } = useFocusedState(focusRef);
  return (
    <div className="relative w-fit" ref={focusRef}>
      <div className="relative text-sm font-medium">
        <button
          className={`rounded-full px-4 py-2.5 focus ${
            activeFilter
              ? `text-[#142c8e] bg-[#d1f1ff] border-[#d1f1ff_!important] ${
                  onReset ? "pr-12" : ""
                }`
              : ""
          }`}
          onClick={toggleFocus}
        >
          {title}
          {activeFilter ? `: ${activeFilter}` : ""}
        </button>
        {activeFilter && onReset && (
          <button
            className="absolute top-0 bottom-0 right-0 rounded-full aspect-square bg-[#1040c1] focus:shadow-[inset_0_0_0_3px_#56ccfe]"
            onClick={() => {
              onReset();
              toggleFocus();
            }}
          >
            <CloseButtonIcon className="w-6 h-6 block m-auto text-white rounded-full" />
          </button>
        )}
      </div>
      {isFocused && (
        <div className="absolute top-[calc(100%+10px)] left-0 bg-white p-4 shadow-[0_0_4px_#0000000f,_0_2px_14px_#0000001a] rounded-xl w-max">
          <h3 className="text-lg font-medium text-[#515354] mt-2 mb-4">
            {title}
          </h3>
          {filterList.map((filter) => (
            <div key={filter} className="my-4">
              <label className="text-lg font-medium flex items-center cursor-pointer w-fit">
                <input
                  className="mr-3 appearance-none focus w-6 h-6 rounded-full cursor-pointer relative before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 before:rounded-full checked:before:shadow-[inset_0px_0px_0px_6px_#1040c1] checked:border-[#1040c1]"
                  type="radio"
                  name="type"
                  value={filter}
                  onChange={onChange}
                  defaultChecked={filter === activeFilter}
                />
                {filter}
              </label>
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  );
};

export default FilterButton;
