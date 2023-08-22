import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ setPage, setFormData }) => {
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [firstNameFurigana, setFirstNameFurigana] = useState(false);
  const [lastNameFurigana, setLastNameFurigana] = useState(false);
  const [year, setYear] = useState(false);
  const [address, setAddress] = useState(false);
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target[0].value + " " + e.target[1].value,
      furigana: e.target[2].value + " " + e.target[3].value,
      year: e.target[4].value,
      email: e.target[5].value,
      phone: e.target[6].value,
      address: e.target[7].value,
    };

    if (
      firstName === true &&
      lastName === true &&
      year === true &&
      address === true &&
      email === true &&
      phone === true
    ) {
      console.log(data);
      setFormData(data);
      setPage("info");
    } else {
      !firstName && setFirstName("required");
      !lastName && setLastName("required");
      !year && setYear("required");
      !address && setAddress("required");
      !email && setEmail("required");
      !phone && setPhone("required");
    }
  };

  const isAlpha = (str) => {
    const re = /^[a-z]+$/i;
    return re.test(str);
  };
  const isDigits = (str) => {
    const re = /^[0-9]+$/i;
    return re.test(str);
  };
  const isEmail = (str) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(str);
  };
  const isPhoneNumber = (str) => {
    const re =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return re.test(str);
  };

  const validateName = (e, setObj) => {
    if (e.target.value != "" && isAlpha(e.target.value)) {
      setObj(true);
    } else {
      setObj(false);
    }
  };

  const validateYear = (e, setObj) => {
    if (e.target.value != "" && isDigits(e.target.value)) {
      setObj(true);
    } else {
      setObj(false);
    }
  };

  const validateAddress = (e, setObj) => {
    if (e.target.value != "") {
      setObj(true);
    } else {
      setObj(false);
    }
  };

  const validateEmail = (e, setObj) => {
    if (e.target.value != "" && isEmail(e.target.value)) {
      setObj(true);
    } else {
      setObj(false);
    }
  };

  const validatePhone = (e, setObj) => {
    if (e.target.value != "" && isPhoneNumber(e.target.value)) {
      setObj(true);
    } else {
      setObj(false);
    }
  };

  return (
    <div className="flex justify-center px-[1rem]">
      <div className="container flex flex-col items-center">
        <h2 className="text-[2rem] font-[700] leading-[3.5rem] text-center mt-[5rem] mb-[1.2rem]">
          エントリーフォーム
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center font-[500]"
        >
          <div className="flex flex-col gap-[2rem] ">
            <div className="flex items-center gap-[1rem] lg:gap-[4rem] max-md:flex-col max-md:items-start">
              <div className="flex items-center gap-[0.5rem]">
                <div className="bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem] md:hidden">
                  必須
                </div>
                <p className="w-[5rem]">氏名</p>
              </div>

              <div className="flex items-center gap-[1rem] md:flex-1">
                <div className="bg-primary max-md:hidden text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <label className="flex items-center">
                  <p className="md:w-[3rem] flex justify-end">姓</p>
                  <input
                    className={`input-primary ml-[0.5rem] border-[2px] max-md:w-full ${
                      firstName == true && "!outline-primary !border-primary"
                    } ${
                      firstName == "required" && "!outline-[red] !border-[red]"
                    }`}
                    type="text"
                    onChange={(e) => {
                      validateName(e, setFirstName);
                    }}
                  />
                </label>
                <label className="flex items-center">
                  <p className="md:w-[3rem] flex justify-end">名</p>
                  <input
                    className={`input-primary ml-[0.5rem] border-[2px] max-md:w-full ${
                      lastName == true && "!outline-primary !border-primary"
                    } ${
                      lastName == "required" && "!outline-[red] !border-[red]"
                    }`}
                    type="text"
                    onChange={(e) => {
                      validateName(e, setLastName);
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center gap-[1rem] lg:gap-[4rem] max-md:flex-col max-md:items-start">
              <div className="flex items-center gap-[0.5rem]">
                <div className="bg-white border-primary text-primary border-[1.5px] md:hidden rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <p className="w-[5rem]">氏名</p>
              </div>

              <div className="flex items-center gap-[1rem] md:flex-1 ">
                <div className="bg-white border-primary text-primary border-[1.5px] max-md:hidden rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <label className="flex items-center">
                  <p className="md:w-[3rem] flex justify-end">せい</p>
                  <input
                    className={`input-primary ml-[0.5rem] border-[2px] max-md:w-full ${
                      firstNameFurigana == true &&
                      "!outline-primary !border-primary"
                    }`}
                    type="text"
                    onChange={(e) => {
                      validateName(e, setFirstNameFurigana);
                    }}
                  />
                </label>
                <label className="flex items-center">
                  <p className="md:w-[3rem] flex justify-end">めい</p>
                  <input
                    className={`input-primary ml-[0.5rem] max-md:w-full border-[2px] ${
                      lastNameFurigana == true &&
                      "!outline-primary !border-primary"
                    }`}
                    type="text"
                    onChange={(e) => {
                      validateName(e, setLastNameFurigana);
                    }}
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-[1rem] lg:gap-[4rem] items-center max-md:flex-col max-md:items-start">
              <div className="flex items-center gap-[0.5rem]">
                <div className="md:hidden bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <p className="w-[5rem]">生まれた年</p>
              </div>

              <div className="flex items-center gap-[1rem] md:flex-1 max-md:w-full ">
                <div className="bg-primary max-md:hidden text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <select
                  className={`input-primary max-md:w-full  md:flex-1 border-[2px] ${
                    year == true && "!border-primary !outline-primary"
                  } ${
                    year == "required" && "!outline-[red] !border-[red]"
                  }`} /* form="carform" */
                  onChange={(e) => {
                    validateYear(e, setYear);
                  }}
                >
                  <option value="">選択する</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                </select>
              </div>
            </div>

            <div className="flex gap-[1rem] lg:gap-[4rem] items-center max-md:flex-col max-md:items-start">
              <div className="flex gap-[0.5rem] items-center">
                <div className="bg-primary md:hidden text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <p className="w-[5rem]">
                  メール <br /> アドレス
                </p>
              </div>

              <div className="flex items-center gap-[1rem] md:flex-1 max-md:w-full">
                <div className="max-md:hidden bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <input
                  className={`input-primary max-md:w-full md:flex-1 border-[2px] ${
                    email == true && "!outline-primary !border-primary"
                  }
                    ${email == "required" && "!outline-[red] !border-[red]"}`}
                  type="text"
                  onChange={(e) => {
                    validateEmail(e, setEmail);
                  }}
                />
              </div>
            </div>

            <div className="flex gap-[1rem] lg:gap-[4rem] items-center max-md:flex-col max-md:items-start">
              <div className="flex gap-[0.5rem] items-center">
                <div className="bg-primary md:hidden text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <p className="w-[5rem]">電話番号</p>
              </div>

              <div className="flex items-center gap-[1rem] md:flex-1 max-md:w-full">
                <div className="max-md:hidden bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <input
                  className={`input-primary max-md:w-full md:flex-1 border-[2px] ${
                    phone == true && "!outline-primary !border-primary"
                  } ${phone == "required" && "!outline-[red] !border-[red]"}`}
                  type="text"
                  onChange={(e) => {
                    validatePhone(e, setPhone);
                  }}
                />
              </div>
            </div>

            <div className="flex gap-[1rem] lg:gap-[4rem] items-center max-md:flex-col max-md:items-start">
              <div className="flex items-center gap-[0.5rem]">
                <div className="md:hidden bg-primary text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                お住まいの <br /> 都道府県
              </div>

              <div className="flex items-center gap-[1rem] md:flex-1 max-md:w-full">
                <div className="bg-primary max-md:hidden text-white rounded-[4px] px-[0.7rem] py-[0.2rem]">
                  必須
                </div>
                <select
                  className={`input-primary max-md:w-full md:flex-1 border-[2px] ${
                    address == true && "border-primary !outline-primary"
                  } ${
                    address == "required" && "!outline-[red] !border-[red]"
                  }`} /* form="carform" */
                  onChange={(e) => {
                    validateAddress(e, setAddress);
                  }}
                >
                  <option value="">選択する</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
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

export default Form;
