import React from "react";
import { Text, Button, Input, Img, Heading } from "./..";

export default function LogInDarkModeForm({
  title = "Create an account",
  google = "Google",
  facebook = "Facebook",
  or = "Or",
  email = "Email",
  password = "Password",
  forgot = "Forgot？",
  createAccount = "Create account",
  confirmation = "Already have an account ?",
  login = "Log in",
  ...props
}) {
  return (
    <div {...props}>
      <a href="#">
        <Heading as="h1" className="!text-gray-50">
          {title}
        </Heading>
      </a>
      <div className="flex w-[87%] flex-col items-center gap-3">
        <div className="flex gap-4 self-stretch">
          <Button
            color="gray_900"
            shape="round"
            leftIcon={
              <Img
                src="images/img_icon_google_original.svg"
                alt="Icon/Google - Original"
                className="h-[20px] w-[20px]"
              />
            }
            className="w-full gap-2 font-semibold sm:px-5"
          >
            {google}
          </Button>
          <Button
            color="gray_900"
            shape="round"
            leftIcon={
              <Img
                src="images/img_icon_facebook_original.svg"
                alt="Icon/Facebook - Original"
                className="h-[20px] w-[20px]"
              />
            }
            className="w-full gap-2 font-semibold sm:px-5"
          >
            {facebook}
          </Button>
        </div>
        <Heading size="xs" as="h2" className="text-center !text-gray-600">
          {or}
        </Heading>
      </div>
      <div className="flex w-[87%] flex-col gap-[22px]">
        <div className="flex flex-col gap-2">
          <div className="flex self-start">
            <Text as="p" className="capitalize !text-blue_gray-100">
              {email}
            </Text>
          </div>
          <Input color="indigo_800" shape="round" name="email" placeholder={`balamia@gmail.com`} className="sm:pr-5" />
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="flex flex-wrap justify-between gap-5">
            <Text as="p" className="self-start capitalize !text-blue_gray-100">
              {password}
            </Text>
            <Text as="p" className="self-end text-right capitalize !text-gray-500">
              {forgot}
            </Text>
          </div>
          <Input
            color="gray_800"
            shape="round"
            name="password"
            placeholder={`Enter your password`}
            suffix={<Img src="images/img_eye.svg" alt="eye" className="h-[24px] w-[24px]" />}
            className="gap-[35px]"
          />
        </div>
        <Button shape="round" className="w-full font-semibold !text-gray-50_02 sm:px-5">
          {createAccount}
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Text as="p" className="capitalize !text-gray-600">
          {confirmation}
        </Text>
        <a href="#">
          <Text as="p" className="capitalize !text-gray-500">
            {login}
          </Text>
        </a>
      </div>
    </div>
  );
}
