function MiniFooter() {
  return (
    <div className="flex py-10 gap-8 justify-start">
      <div className="border-t w-full border-[#D0D5DD] pt-8 px-24 flex gap-8">
        <p className="text-[#475467]">© 2077 CaterLink. All rights reserved.</p>
        <div className="flex gap-4">
          <p className="text-[#475467]">Terms</p>
          <p className="text-[#475467]">Privacy</p>
          <p className="text-[#475467]">Cookies</p>
        </div>
      </div>
    </div>
  );
}

export default MiniFooter;
