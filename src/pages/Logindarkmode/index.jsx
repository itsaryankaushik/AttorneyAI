import React from "react";
import { Helmet } from "react-helmet";
import LogInDarkModeForm from "../../components/LogInDarkModeForm";

export default function LogindarkmodePage() {
  return (
    <>
      <Helmet>
        <title>Aryan's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[900px] w-full items-center justify-center bg-black-900 bg-[url(/public/images/img_log_in_dark_mode.png)] bg-cover bg-no-repeat px-14 py-[168px] md:h-auto md:p-5">
        <LogInDarkModeForm className="gray_400_7f_white_A700_border flex w-[41%] flex-col items-center gap-[26px] rounded-[20px] border border-solid bg-gray-900_cc p-[41px] shadow-xs md:w-full md:p-5" />
      </div>
    </>
  );
}
