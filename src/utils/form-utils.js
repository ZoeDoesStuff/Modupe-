import * as Yup from "yup"




export const signUpvalidationSchema = Yup.object().shape({
 names: Yup.string().required("Names are Necessary").required("Please Use Full Name"),
 email: Yup.string().required("Email is Required").email("Email is invalid"),
 password: Yup.string().required('Password is Required'),
 passwordConfirmation: Yup.string()
.oneOf([Yup.ref('password'), null], 'Passwords must match'),
 phone: Yup.string().required("Phone number is required").matches(),
 address: Yup.string().required("Address is required").required("Please use valid address"),
});
export const SigninvalidationSchema = Yup.object().shape({
names: Yup.string().required("Use Full Name used before"),
password: Yup.string().required('Password is Required'),
});    




