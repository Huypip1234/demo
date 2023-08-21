const Info = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col items-center">
        <h2 className="text-[2rem] font-[700] leading-[3.5rem] text-center mt-[5rem] mb-[1.2rem]">
          エントリーフォーム
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center font-[500]"
        >
          <div className="flex flex-col gap-[2rem] ">
            <div className="flex items-center gap-[4rem]">
              <p className="w-[5rem]">氏名</p>
              <div className="flex items-center gap-[1rem] flex-1 ">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <label className="flex items-center">
                  <p className="w-[3rem] flex justify-end">姓</p>
                  <input className="input-primary ml-[0.5rem]" type="text" />
                </label>
                <label className="flex items-center">
                  <p className="w-[3rem] flex justify-end">姓</p>
                  <input className="input-primary ml-[0.5rem]" type="text" />
                </label>
              </div>
            </div>

            <div className="flex items-center gap-[4rem]">
              <p className="w-[5rem]">ふりがな</p>
              <div className="flex items-center gap-[1rem] flex-1 ">
                <div className="border-primary border-[1.5px] text-primary rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <label className="flex items-center">
                  <p className="w-[3rem] flex justify-end">せい</p>
                  <input className="input-primary ml-[0.5rem]" type="text" />
                </label>
                <label className="flex items-center">
                  <p className="w-[3rem] flex justify-end">めい</p>
                  <input className="input-primary ml-[0.5rem]" type="text" />
                </label>
              </div>
            </div>

            <div className="flex gap-[4rem] items-center">
              <p className="w-[5rem]">生まれた年</p>
              <div className="flex items-center gap-[1rem] flex-1">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <select
                  className="input-primary flex-1 focus:border-primary" /* form="carform" */
                >
                  <option value="volvo">1993</option>
                  <option value="saab">2004</option>
                  <option value="opel">2005</option>
                  <option value="audi">2006</option>
                </select>
              </div>
            </div>

            <div className="flex gap-[4rem] items-center">
              <p className="w-[5rem]">
                メール <br /> アドレス
              </p>
              <div className="flex items-center gap-[1rem] flex-1">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <input className="input-primary flex-1" type="text" />
              </div>
            </div>

            <div className="flex gap-[4rem] items-center">
              <p className="w-[5rem]">電話番号</p>
              <div className="flex items-center gap-[1rem] flex-1">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <input className="input-primary flex-1" type="text" />
              </div>
            </div>

            <div className="flex gap-[4rem] items-center">
              <p className="w-[5rem]">
                お住まいの <br /> 都道府県
              </p>
              <div className="flex items-center gap-[1rem] flex-1">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <select
                  className="input-primary flex-1 focus:border-primary" /* form="carform" */
                >
                  <option value="volvo">姓 山田</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
          </div>

          <button className="btn-primary hover:!bg-secondary w-[16rem] mt-[2.5rem]">
            確認画面へ進む
          </button>
        </form>
      </div>
    </div>
  );
};

export default Info;
