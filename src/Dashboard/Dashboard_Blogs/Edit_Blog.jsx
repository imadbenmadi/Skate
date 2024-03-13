import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoWarning } from "react-icons/io5";
function Edit_Blog() {
    const location = useLocation();
    const Blogs = useOutletContext();
    const Blog_id = location.pathname.split("/")[3];

    if (!Blogs) return null;
    else {
        const Blog = Blogs.filter((item) => item._id === Blog_id);
        if (!Blog)
            return (
                <>
                    <Link
                        className="bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 w-fit m-auto"
                        to={"/Dashboard/Blogs"}
                    >
                        <>
                            <FaArrowLeft />
                            <div>Go Back</div>
                        </>
                    </Link>
                    <div
                        className="flex items-center justify-center text-gray font-bold p-8 w-fit
                     m-auto mt-10 bg-white rounded-md shadow-lg text-center"
                    >
                        <IoWarning className="text-red-500 text-4xl " />
                        <p className="text-xl text-gray">Blog Not Found</p>
                    </div>
                </>
            );
        else
            return (
                <div className=" ">
                    <Link
                        className="bg-green rounded cursor-pointer text-white text-xl flex items-center gap-2 px-3 py-1 w-fit m-auto"
                        to={"/Dashboard/Blogs"}
                    >
                        <>
                            <FaArrowLeft />
                            <div>Go Back</div>
                        </>
                    </Link>
                    {/* Input fields */}
                    <div className="border border-gray_white text-black_text shadow-md w-[80%] md:w-[50%] m-auto mt-3 p-5 rounded-lg">
                        <Formik
                            initialValues={{
                                Title: Blog[0].Title || "",
                                Text: Blog[0].Text || "",
                                Description: Blog[0].Description || "",
                                Price: Blog[0].Price || "",
                                Category: Blog[0].Category || "",
                            }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.Title) {
                                    errors.Title = "Title is required.";
                                }
                                if (!values.Text) {
                                    errors.Text = "Text is required.";
                                }
                                if (!values.Description) {
                                    errors.Description =
                                        "Description is required.";
                                }
                                if (!values.Price) {
                                    errors.Price = "Price is required.";
                                } else if (isNaN(values.Price))
                                    errors.Price = "Invalid Price";

                                if (!values.Category) {
                                    errors.Category = "Category is required.";
                                }
                                return errors;
                            }}
                            onSubmit={async (
                                values,
                                { setSubmitting, resetForm }
                            ) => {
                                try {
                                    setSubmitting(true);
                                    // Call your Axios POST request here
                                    // Example:
                                    // const response = await Axios.post("your_api_endpoint", values);
                                    // Handle response accordingly
                                    // Example:
                                    // if (response.status === 200) {
                                    //     resetForm();
                                    //     Swal.fire("Success!", "Blog added successfully.", "success");
                                    // } else {
                                    //     Swal.fire("Error!", "Failed to add Blog.", "error");
                                    // }
                                } catch (error) {
                                    Swal.fire(
                                        "Error!",
                                        "Failed to add Blog.",
                                        "error"
                                    );
                                } finally {
                                    setSubmitting(false);
                                }
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form className="flex flex-col text-sm md:text-lg  gap-4 items-center justify-center flex-wrap">
                                    <div className=" w-full ">
                                        <div>
                                            Title{" "}
                                            <span className="text-red-600 font-semibold">
                                                *
                                            </span>
                                        </div>
                                        <Field
                                            as="textarea"
                                            name="Title"
                                            className="border border-gray_white px-2 py-1 rounded shadow-sm w-full "
                                            disabled={isSubmitting}
                                        />
                                        <ErrorMessage
                                            name="Title"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                    <div className=" w-full ">
                                        <div>
                                            Text{" "}
                                            <span className="text-red-600 font-semibold">
                                                *
                                            </span>
                                        </div>
                                        <Field
                                            as="textarea"
                                            name="Text"
                                            className="border border-gray_white px-2 py-1 rounded shadow-sm w-full"
                                            disabled={isSubmitting}
                                            rows={4}
                                        />
                                        <ErrorMessage
                                            name="Text"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                    <div className=" w-full h-fit ">
                                        <div>
                                            Description{" "}
                                            <span className="text-red-600 font-semibold">
                                                *
                                            </span>
                                        </div>
                                        <Field
                                            as="textarea"
                                            name="Description"
                                            className="border border-gray_white px-2 py-1 rounded shadow-sm w-full"
                                            disabled={isSubmitting}
                                            rows={10}
                                        />
                                        <ErrorMessage
                                            name="Description"
                                            component="div"
                                            style={errorInputMessage}
                                        />
                                    </div>
                                    <div className=" flex gap-3 items-center justify-center w-[70%]">
                                        <div>
                                            <div>
                                                Price{" "}
                                                <span className="text-red-600 font-semibold">
                                                    *
                                                </span>
                                            </div>
                                            <Field
                                                type="text"
                                                name="Price"
                                                className="border border-gray_white px-2 py-1 rounded shadow-sm"
                                                disabled={isSubmitting}
                                            />
                                            <ErrorMessage
                                                name="Price"
                                                component="div"
                                                style={errorInputMessage}
                                            />
                                        </div>
                                        <div>
                                            <div>
                                                Category{" "}
                                                <span className="text-red-600 font-semibold">
                                                    *
                                                </span>
                                            </div>
                                            <Field
                                                type="text"
                                                name="Category"
                                                className="border border-gray_white px-2 py-1 rounded shadow-sm"
                                                disabled={isSubmitting}
                                            />
                                            <ErrorMessage
                                                name="Category"
                                                component="div"
                                                style={errorInputMessage}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className={` ${
                                            isSubmitting
                                                ? "bg-gray_white text-gray"
                                                : " bg-green text-white"
                                        } w-fit m-auto px-4 py-2 rounded font-semibold `}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <div>loading</div>
                                        ) : (
                                            "Submit"
                                        )}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            );
    }
}

const errorInputMessage = {
    fontSize: "12px",
    color: "red",
};

export default Edit_Blog;