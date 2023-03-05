import clsx from "clsx";
import SearchIcon from "../../assets/images/icon-search.svg";

interface Props {
  value: string;
}

export const SearchBar = ({ value }: Props) => {
  return (
    <div className={clsx(["relative w-[327px] rounded-2xl"])}>
      <input
        type="text"
        className={clsx([
          "block w-full bg-light-grey-400 rounded-2xl py-[14px] px-6 font-sans font-bold outline-secondary outline-1",
        ])}
        value={value}
      />
      <div
        className={clsx([
          "absolute inset-y-0 right-0 pr-6 flex items-center cursor-pointer",
        ])}
      >
        <img src={SearchIcon} alt="Search" />
      </div>
    </div>
  );
};
