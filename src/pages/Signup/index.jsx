import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text } from "../../components";
import SignUpForm from "../../components/SignUpForm";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Aryan's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full items-center justify-between gap-5 bg-white-A700 pr-40 md:flex-col md:pr-5">
        <div className="relative h-[900px] w-[56%] bg-gray-900_02 md:h-auto md:w-full md:p-5">
          <Text
            size="md"
            as="p"
            className="mb-[113px] w-[79%] bg-gradient bg-clip-text italic leading-[120%] !text-transparent"
          >
            <>
              Welcome.
              <br />
              Start your journey now with our
              <br />
              Attorney AI
            </>
          </Text>
          <Img
            src="images/img_frame_32.svg"
            alt="image"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[900px] w-full"
          />
        </div>
        <SignUpForm className="flex w-[31%] flex-col items-start gap-[26px] rounded-[10px] md:w-full" />
      </div>
    </>
  );
}
