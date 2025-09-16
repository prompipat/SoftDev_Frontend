function BlogpostCard() {
  return (
    <div className="flex flex-col gap-1 max-w-[224px]">
      <div className="flex flex-col gap-3">
        <img
          src="https://github.com/shadcn.png"
          alt=""
          className="rounded-lg w-[224px] h-[140px] object-cover"
        />
        <p className="text-sm font-bold text-[#101828]">
          8 สถานที่จัดงานบุญนอกสถานที่
        </p>
      </div>
      <p className="text-xs text-[#667085]">โดย Minnie</p>
    </div>
  );
}

export default BlogpostCard;
