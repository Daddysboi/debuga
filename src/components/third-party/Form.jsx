import styled from "styled-components";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useScroll } from "../../main";
import { sendOtp } from "../../redux/features/registerSlice";

import { Input } from "./input";
import Button from "../Button";
import { loginSchema, signUpSchema } from "../../schema/validationSchema";

const Container = styled.section`
  background-color: #fff;
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NameInput = styled.div`
  display: flex;
  gap: 1rem;
`;

const Text = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

export function SignupForm() {
  const { action, setAction } = useScroll();

  const initialValues = {
    fullName: "",
    lastname: "",
    email: "",
    password: "",
  };

  const onSubmit = (values, { resetForm }) => {
    let data = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      email: values?.email?.toLowerCase(),
      password: values?.password,
    };
    dispatch(sendOtp({ email: data?.email }))
      .unwrap()
      .then((resp) => {
        toast.success(resp?.payload?.message || "Please check your inbox");
        // navigate("/otp", { state: data });
        resetForm();
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong");
      });
  };

  return (
    <Container>
      <Header>
        <Button
          className={"relative group/btn "}
          id="Sign Up"
          text="Sign Up"
          fontSize="1.2rem"
          display="none"
          textcolor={action === "Sign Up" ? "#000" : "#E6E8EC"}
          nopaddng
          fontWeight="800"
          hoverbg="transparent"
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          <BottomGradient />
        </Button>

        <Button
          className={"relative group/btn "}
          id="Login"
          text="Login"
          fontSize="1.2rem"
          display="none"
          textcolor={action === "Login" ? "#000" : "#E6E8EC"}
          nopaddng
          fontWeight="800"
          hoverbg="transparent"
          onClick={() => {
            setAction("Login");
          }}
        >
          <BottomGradient />
        </Button>
      </Header>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={action === "Login" ? loginSchema : signUpSchema}
      >
        <Form>
          <Wrapper>
            {action === "Sign Up" && (
              <NameInput>
                <Field
                  as={Input}
                  label="First Name"
                  name="firstname"
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                />
                <Field
                  as={Input}
                  label="Last Name"
                  id="lastname"
                  name="lastname"
                  placeholder="Durden"
                  type="text"
                />
              </NameInput>
            )}

            <Field
              as={Input}
              label="Email Address"
              name="email"
              placeholder="projectmayhem@fc.com"
              type="email"
            />
            <Field
              as={Input}
              label="Password"
              name="password"
              placeholder="••••••••"
              type="password"
            />

            {action === "Sign Up" && (
              <Field
                as={Input}
                label="Confirm password"
                placeholder="••••••••"
                type="password"
              />
            )}

            <div>
              <Button
                className={"relative group/btn "}
                type="submit"
                onClick={() => {}}
                fontSize="1rem"
                display="other"
                width="100%"
              >
                {action} &rarr;
                <BottomGradient />
              </Button>
            </div>
          </Wrapper>

          {action === "Login" && (
            <Text>
              Forgot Password?
              <Link to="/" className="px-1 text-blue-500">
                click here!
              </Link>
            </Text>
          )}

          <Divider />

          <Button
            className=" relative group/btn flex space-x-2 items-center justify-start"
            display="none"
            type="submit"
            hoverbg="none"
            fontSize="1rem"
            border="1px solid #e8e8e8"
            width="100%"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800" />
            <span className="text-neutral-700 text-sm">Google</span>
            <BottomGradient />
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export const Divider = () => {
  return (
    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
  );
};
