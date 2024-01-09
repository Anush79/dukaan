import { HelpOutlineOutlined, QuestionMarkOutlined, SearchOutlined } from "@mui/icons-material";

export default function Header() {
  return (
    <header className="grid grid-cols-3 pl-8 pr-8 pt-3 pb-3 gap-3 items-center justify-between ">
      <span className=" flex items-center justify-start  gap-4 ">
        <span className="text-lg text-[#1A181E] font-semibold">Payments</span>
        <span className="text-xs text-[#4D4D4D] flex gap-1 hover:cursor-pointer  items-center ">
          <HelpOutlineOutlined fontSize="sm" /> How it works
        </span>
      </span>
      <span  className="bg-[#F2F2F2] flex flex-row outline-none w-full gap-2 px-4 py-2">
       <SearchOutlined className="text-[#808080]"/>
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-[#F2F2F2] w-full outline-none"
        />
      </span>
      <span className="flex justify-end gap-3">
        <span className="bg-[#e6e6e6] hover:cursor-pointer w-10 h-10 text-center rounded-full flex items-center justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
              fill="#4D4D4D"
            />
          </svg>
        </span>
        <span className="bg-[#e6e6e6] hover:cursor-pointer  w-10 h-10 text-center rounded-full flex items-center justify-center">

          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.11092 8.50258C7.51563 9.15871 6.48437 9.15872 5.88908 8.50258L0.615075 2.6895C-0.259446 1.72559 0.424491 0.181595 1.72599 0.181595L12.274 0.181596C13.5755 0.181596 14.2594 1.72559 13.3849 2.68949L8.11092 8.50258Z"
              fill="#4D4D4D"
            />
          </svg>
        </span>
      </span>
    </header>
  );
}
