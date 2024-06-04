import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import signupBg from "../assets/signup-signin.svg";
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number is not valid")
        .required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2">
          <img
            src={signupBg}
            alt="Signup background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Create an Account
          </h2>
          <form className="mt-4" onSubmit={formik.handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className={`w-full px-4 py-2 bg-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    formik.touched.firstName && formik.errors.firstName
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className={`w-full px-4 py-2 bg-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    formik.touched.lastName && formik.errors.lastName
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className={`w-full px-4 py-2 bg-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className={`w-full px-4 py-2 bg-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    formik.touched.phone && formik.errors.phone
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  className={`w-full px-4 py-2 bg-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className={`w-full px-4 py-2 bg-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-8 text-center text-gray-600">
            Already have an account?
            <Link to="/" className="text-indigo-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
