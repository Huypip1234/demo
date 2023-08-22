// eslint-disable-next-line react/prop-types
const Submited = ({ setPage }) => {
  return (
    <div className="flex justify-center">
      <div className="container flex flex-col items-center px-[1rem] ">
        <h2 className="text-[2rem] font-[700] leading-[4rem] text-center mt-[5rem]">
          登録が完了しました。
          <br />
          以下より無料カウンセリングのご予約をお取りください。
        </h2>
        <button
          onClick={() => {
            setPage("form");
          }}
          className="btn-primary px-[1.5rem] hover:!bg-secondary mt-[2rem]"
        >
          無料カウンセリングへ申し込む
        </button>
      </div>
    </div>
  );
};

export default Submited;
