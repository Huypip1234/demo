/* eslint-disable react/prop-types */
const Info = ({ formData, setPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center px-[1rem]">
      <div className="container flex flex-col items-center pb-[2rem]">
        <h2 className="sm:text-[2rem] text-[1.5rem] font-[700] leading-[3.5rem] text-center mt-[5rem] mb-[2rem]">
          エントリーフォーム確認
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center font-[500] md:w-[700px]"
        >
          <div className="flex flex-col gap-[2rem] w-full">

            <div className="flex items-center gap-[1rem] md:gap-[4rem] border-b border-[#cfdde0] pb-[1.5rem]">
              <p className="w-[5rem]">氏名</p>
              <div className="flex items-center gap-[1rem] flex-1 ">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <p>{formData?.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-[1rem] md:gap-[4rem]  border-b border-[#cfdde0] pb-[1.5rem]">
              <p className="w-[5rem]">ふりがな</p>
              <div className="flex items-center gap-[1rem] flex-1 ">
                <div className="border-primary border-[1.5px] text-primary rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <p>{formData?.furigana}</p>
              </div>
            </div>

            <div className="flex gap-[1rem] md:gap-[4rem] items-center  border-b border-[#cfdde0] pb-[1.5rem]">
              <p className="w-[5rem]">生まれた年</p>
              <div className="flex items-center gap-[1rem] flex-1">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <p>{formData?.year}</p>
              </div>
            </div>

            <div className="flex gap-[1rem] md:gap-[4rem] items-center  border-b border-[#cfdde0] pb-[1.5rem]">
              <p className="w-[5rem]">
                メール <br /> アドレス
              </p>
              <div className="flex items-center gap-[1rem] flex-1">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <p className="break-all">{formData?.email}</p>
              </div>
            </div>

            <div className="flex gap-[1rem] md:gap-[4rem] items-center  border-b border-[#cfdde0] pb-[1.5rem]">
              <p className="w-[5rem]">電話番号</p>
              <div className="flex items-center gap-[1rem] flex-1">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <p>{formData?.phone}</p>
              </div>
            </div>

            <div className="flex gap-[1rem] md:gap-[4rem] items-center  border-b border-[#cfdde0] pb-[1.5rem]">
              <p className="w-[5rem]">
                お住まいの <br /> 都道府県
              </p>
              <div className="flex items-center gap-[1rem] flex-1">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <p>{formData?.address}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-[1rem]">
            <button
              onClick={() => {
                setPage("form");
              }}
              className="btn-secondary md:w-[16rem] w-[10rem] mt-[2.5rem]"
            >
              戻る
            </button>
            <button
              onClick={() => {
                setPage("submited");
              }}
              className="btn-primary hover:!bg-secondary md:w-[16rem] w-[10rem] mt-[2.5rem]"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Info;
