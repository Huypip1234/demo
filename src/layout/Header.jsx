const Header = () => {
  return (
    <div className="bg-secondary flex justify-center items-center py-[3rem] gap-[3rem] border-b-primary border-b-[2px]">
      <img src="/assets/images/left.png" alt="err" className="w-[7rem]" />

      <div className="flex flex-col items-center gap-[2rem]">
        <h1 className="text-center text-white font-[600] text-[1.1rem] leading-8 tracking-[0.1rem]">
          リモートワークのお仕事多数!
          <br /> 無料会員登録をしてお仕事をもっと見よう。
        </h1>
        <div className="relative">
          <button className="btn-primary w-[15rem]">
            無料会員登録
          </button>
          <img
            src="/assets/images/tooltip.png"
            alt="err"
            className="absolute top-[-1.7rem] right-[-4.6rem] w-[4.5rem]"
          />
        </div>
      </div>

      <img src="/assets/images/right.png" alt="err" className="w-[6rem]" />
    </div>
  );
};

export default Header;
