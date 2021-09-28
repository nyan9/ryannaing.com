import axios from "axios";
import { Formik, Form, Field, FastField, ErrorMessage } from "formik";
import Recaptcha from "react-google-recaptcha";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Center,
  Button,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useLinkColor } from "components/ui/theme";

const ContactForm = () => {
  const linkColor = useLinkColor();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        // recaptcha: "",
        success: false,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name field is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email field is required"),
        message: Yup.string().required("Message field is required"),
        // recaptcha:
        //   process.env.NODE_ENV !== "development"
        //     ? Yup.string().required("Robots are not welcome yet!")
        //     : Yup.string(),
      })}
      onSubmit={async (
        { name, email, message },
        { setSubmitting, resetForm, setFieldValue }
      ) => {
        try {
          await axios({
            method: "POST",
            url:
              process.env.NODE_ENV !== "development"
                ? `/api/contact`
                : "http://localhost:3000/api/contact",
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify({
              name,
              email,
              message,
            }),
          });
          setSubmitting(false);
          setFieldValue("success", true);
          setTimeout(() => resetForm(), 6000);
        } catch (err) {
          setSubmitting(false);
          setFieldValue("success", false);
          alert("Something went wrong, please try again!");
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form>
          <VStack
            p={4}
            bg={useColorModeValue("white", "gray.800")}
            rounded='xl'
            borderWidth='1px'
            borderColor={useColorModeValue("gray.100", "gray.700")}
            w='100%'
            textAlign='center'
            align='center'
            spacing={2}
            cursor='pointer'
            _hover={{ shadow: "lg" }}
          >
            <Field name='name'>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  isRequired
                >
                  <FormLabel htmlFor='name'>Name</FormLabel>
                  <Input
                    {...field}
                    id='name'
                    focusBorderColor='#53c8c4'
                    placeholder='Ryan'
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='email'>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                  isRequired
                >
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input
                    {...field}
                    id='email'
                    focusBorderColor='#53c8c4'
                    placeholder='rynnaing@gmail.com'
                  />

                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name='message'>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.message && form.touched.message}
                  isRequired
                >
                  <FormLabel htmlFor='message'>Message</FormLabel>
                  <Textarea
                    {...field}
                    id='message'
                    focusBorderColor='#53c8c4'
                    placeholder='Your message...'
                  />
                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/* {values.name && values.email && values.message && (
              <Field>
                <FastField
                  component={Recaptcha}
                  sitekey={process.env.NEXT_PUBLIC_PORTFOLIO_RECAPTCHA_KEY}
                  name='recaptcha'
                  onChange={(value: string) =>
                    setFieldValue("recaptcha", value)
                  }
                />
                <FormErrorMessage>{errors.recaptcha}</FormErrorMessage>
              </Field>
            )} */}

            {values.success && (
              <Center>
                <h4>
                  Your message has been successfully sent, I will get back to
                  you ASAP!
                </h4>
              </Center>
            )}

            <Button
              type='submit'
              bg={linkColor}
              color='white'
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
