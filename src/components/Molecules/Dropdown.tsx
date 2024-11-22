import { FC, useState, useRef, useEffect, ReactNode } from "react";
import Link from "next/link";

interface DropdownListsProps {
  name: string;
  path: string;
}

interface DropdownProps {
  label: ReactNode | string;
  lists: DropdownListsProps[];
}

const Dropdown: FC<DropdownProps> = ({ label, lists }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
      setDropdownIsOpen(false);
    }
  };

  const DropdownLists = () => {
    return (
      <div className="absolute top-0 w-[240px] mt-[30px]">
        <div ref={boxRef} className="bg-white rounded-[8px] p-4 shadow-lg">
          <ul className="text-[##344054]">
            {lists &&
              lists.map((it, index) => (
                <li key={index} className="mb-3 last:mb-0">
                  <Link href={it.path}>{it.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ">
      <div className="text-white">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setDropdownIsOpen((prevState) => !prevState);
          }}
          className="flex items-center"
        >
          <span className="block mr-2">{label}</span>
          <span className="icon-arrow-down"></span>
        </button>
      </div>
      {dropdownIsOpen && <DropdownLists />}
    </div>
  );
};

export default Dropdown;
