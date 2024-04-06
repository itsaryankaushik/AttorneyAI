import React from "react";
import { Helmet } from "react-helmet";
import LogInForm from "../../components/LogInForm";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>AttorneyAI</title>
        <meta name="description" content="Web site for your Legal support and AI" />
      </Helmet>
      <div className="flex h-[900px] w-full items-center justify-center bg-gray-900_02 bg-[url(/public/images/img_log_in.svg)] bg-cover bg-no-repeat px-14 py-[222px] md:h-auto md:p-5">
        <LogInForm className="flex w-[41%] flex-col items-center justify-center gap-[18px] rounded-[20px] bg-white-A700 p-[41px] md:w-full md:p-5" />
      </div>
    </>
  );
}
