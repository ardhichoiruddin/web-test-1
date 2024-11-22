import { FC, useState, useRef, useEffect, ReactNode } from "react";
import Link from "next/link";

interface DropdownProps {
  label: ReactNode | string;
}

const Dropdown: FC<DropdownProps> = ({ label }) => {
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
            <li className="mb-3 last:mb-0">
              <Link href={"/"}>채용</Link>
            </li>
            <li className="mb-3 last:mb-0">
              <Link href={"/"}>해외 개발자 원격 채용</Link>
            </li>
            <li className="mb-3 last:mb-0">
              <Link href={"/"}>외국인 원격 채용 (비개발 직군)</Link>
            </li>
            <li className="mb-3 last:mb-0">
              <Link href={"/"}>한국어 가능 외국인 채용</Link>
            </li>
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
