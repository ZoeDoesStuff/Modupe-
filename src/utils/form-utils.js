import * as Yup from "yup"




export const signUpvalidationSchema = Yup.object().shape({
 names: Yup.string().required("Names are Necessary").required("Please Use Full Name"),
 email: Yup.string().required("Email is Required").email("Email is invalid"),
 password: Yup.string().required('Password is Required'),
 passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
 phonenumber: Yup.string().required("Phone number is required"),
 address: Yup.string().required("Address is required").required("Please use valid address"),
});
export const SigninvalidationSchema = Yup.object().shape({
email: Yup.string().required("Email is Required").email("Email is invalid"),
password: Yup.string().required('Password is Required'),
});    




