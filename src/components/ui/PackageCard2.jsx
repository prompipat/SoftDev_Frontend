function PackageCard2() {
  return (
    <div className="flex flex-col gap-2 max-w-[284px] relative">
      <div className="flex gap-2 max-w-[284px]">
        <img
          src="https://github.com/shadcn.png"
          alt=""
          className="w-[88px] h-[88px] rounded-md object-cover"
        />
        <div className="flex flex-col gap-1 max-w-[188px] relative">
          <p className="text-[#101828] truncate overflow-hidden whitespace-nowrap">
            บุฟฟเฟต์ไทยสแตนดาร์ต / Buffet Thai Stand
          </p>
          <p className="font-bold text-gradient">เริ่ม 295 บาท/ท่าน</p>
          <button className="w-fit h-fit p-2 bg-gradient rounded-[100px] shadow-xs text-white self-end absolute bottom-0 right-0">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageCard2;
