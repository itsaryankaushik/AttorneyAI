import React from "react";
import { Text, Button, Img, Input, Heading } from "./..";

export default function SignUpForm({
  title = "Create an account",
  email = "Email",
  password = "Password",
  createAccount = "Create account",
  continueWith = "Continue with Google",
  confirmation = "Already have an account ?",
  login = "Log in",
  ...props
}) {
  return (
    <div {...props}>
      <a href="#">
        <Heading as="h1">{title}</Heading>
      </a>
      <div className="flex flex-col gap-5 self-stretch">
        <div className="flex flex-col gap-2">
          <div className="flex self-start">
            <Text as="p" className="capitalize !text-blue_gray-800">
              {email}
            </Text>
          </div>
          <Input shape="round" name="email" placeholder={`balamia@gmail.com`} className="sm:pr-5" />
        </div>
        <div className="flex flex-col gap-[7px]">
          <div className="flex self-start">
            <Text as="p" className="capitalize !text-blue_gray-800">
              {password}
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
      <div className="flex flex-col items-center gap-[23px] self-stretch">
        <Button shape="round" className="w-full font-semibold sm:px-5">
          {createAccount}
        </Button>
        <Button
          color="light_blue_50"
          shape="round"
          leftIcon={
            <Img src="images/img_icon_google_original.svg" alt="Icon/Google - Original" className="h-[20px] w-[20px]" />
          }
          className="w-full gap-2 font-semibold sm:px-5"
        >
          {continueWith}
        </Button>
        <div className="flex flex-wrap gap-2">
          <Text as="p" className="capitalize !text-blue_gray-300">
            {confirmation}
          </Text>
          <a href="#">
            <Text as="p" className="capitalize !text-blue-A400">
              {login}
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}
