import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button } from "../../components";

export default function BgPage() {
  return (
    <>
      <Helmet>
        <title>Aryan's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full">
        <div className="flex flex-col items-end">
          <Img src="images/img_ellipse_2.png" alt="image" className="relative z-[1] h-[192px] w-[14%] object-cover" />
          <div className="relative mt-[-192px] flex flex-col items-start self-stretch pt-6 sm:pt-5">
            <div className="mx-auto flex w-full max-w-[1712px] items-start justify-between gap-5 md:p-5 sm:flex-col">
              <Img
                src="images/img_logo_removebg_preview.png"
                alt="logoremovebg"
                className="h-[168px] w-[11%] rounded-[50%]"
              />
              <div className="mt-[18px] flex w-[19%] flex-wrap justify-between gap-5 sm:w-full">
                <a href="#">
                  <Text size="s" as="p" className="text-center !font-russoone">
                    Sign Up
                  </Text>
                </a>
                <a href="#">
                  <Text size="s" as="p" className="text-center !font-russoone">
                    Log In
                  </Text>
                </a>
              </div>
            </div>
            <div className="mx-auto mt-[110px] flex w-full max-w-[1530px] items-center justify-between gap-5 self-center md:flex-col md:p-5">
              <Text size="xl" as="p" className="!font-russoone">
                ATTORNEY AI
              </Text>
              <Text size="lg" as="p" className="w-[46%] text-center !font-russoone md:w-full">
                Your Personal Legal AI Assistant
              </Text>
            </div>
            <div className="mx-auto mt-[111px] flex w-full max-w-[1430px] items-start self-center md:flex-col md:p-5">
              <Text size="s" as="p" className="mb-[54px] w-[38%] text-center !font-russoone leading-[120%] md:w-full">
                <span className="text-white-A700">for&nbsp;</span>
                <span className="text-indigo-A700_01">
                  <>
                    clients:
                    <br />
                    No more tedious form searching and filling, expensive consultation and long waits.
                  </>
                </span>
              </Text>
              <Button
                color="indigo_A700_01"
                size="md"
                className="ml-[45px] min-w-[316px] rounded-[36px] font-russoone md:ml-0 sm:px-5"
              >
                Chat For Free
              </Button>
              <Text
                size="s"
                as="p"
                className="ml-[33px] w-[38%] text-center !font-russoone leading-[120%] md:ml-0 md:w-full"
              >
                <span className="text-white-A700">for&nbsp;</span>
                <span className="text-indigo_A700_02">
                  <>
                    lawyers:
                    <br />
                    No more routine tasks. Automate your daily needs using the newest AI features
                  </>
                </span>
              </Text>
            </div>
            <Img src="images/img_ellipse_1.png" alt="image_one" className="mt-16 h-[108px] w-[14%] object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}
