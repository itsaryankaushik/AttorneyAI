import React from "react";
import { Text, Button, Input, Img, Heading } from "./..";

export default function LogInForm({
  title = "Login to your account",
  email = "Email",
  password = "Password",
  forgot = "Forgot？",
  loginNow = "Login now",
  confirmation = "Don&#39;t have an account ?",
  signup = "Sign up",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex px-11 md:px-5">
        <Heading as="h1">{title}</Heading>
      </div>
      <div className="flex w-[87%] flex-col gap-8">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex self-start">
              <Text as="p" className="capitalize !text-blue_gray-800">
                {email}
              </Text>
            </div>
            <Input shape="round" name="email" placeholder={`balamia@gmail.com`} className="sm:pr-5" />
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex flex-wrap justify-between gap-5">
              <Text as="p" className="self-start capitalize !text-blue_gray-800">
                {password}
              </Text>
              <Text as="p" className="self-end text-right capitalize !text-blue-A400">
                {forgot}
              </Text>
            </div>
            <Input
              color="blue_gray_100_01"
              shape="round"
              name="password"
              placeholder={`Enter your password`}
              suffix={<Img src="images/img_eye_blue_gray_300.svg" alt="eye" className="h-[24px] w-[24px]" />}
              className="gap-[35px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[19px]">
          <Button size="sm" shape="round" className="w-full font-semibold sm:px-5">
            {loginNow}
          </Button>
          <div className="flex flex-wrap gap-2">
            <Text as="p" className="self-start capitalize !text-blue_gray-300">
              {confirmation}
            </Text>
            <a href="#" className="self-end">
              <Text as="p" className="capitalize !text-blue-A400">
                {signup}
              </Text>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
