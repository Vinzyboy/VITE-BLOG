import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import { ImagePlusIcon, X } from "lucide-react";
import SpinnerButton from "../partials/spinners/SpinnerButton";
import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import { Form, Formik } from "formik";
import {
  InputPhotoUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs";
import * as Yup from "Yup";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { imgPath } from "@/components/helpers/functions-general";
import { useMutation } from "@tanstack/react-query";

const ModalAddBlog = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const { uploadPhoto, handleChangePhoto, photo } =
    useUploadPhoto("/v2/upload-photo");

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/blog/${itemEdit.blog_aid}` : `/v2/blog`,
        itemEdit ? "put" : "post",
        values
      ),

    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["blog"],
      });

      // show error box
      if (data.success) {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
      } else {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      }
    },
  });
  const handleClose = () => dispatch(setIsAdd(false));

  const initVal = {
    blog_title: itemEdit ? itemEdit.blog_title : "",
    blog_excerpt: itemEdit ? itemEdit.blog_excerpt : "",
    blog_image: itemEdit ? itemEdit.blog_image : "",
    blog_published_date: itemEdit ? itemEdit.blog_published_date : "",
    blog_category: itemEdit ? itemEdit.blog_category : "",
    blog_reading_time: itemEdit ? itemEdit.blog_reading_time : "",
    blog_author: itemEdit ? itemEdit.blog_author : "",
    blog_content: itemEdit ? itemEdit.blog_content : "",
    blog_title_old: itemEdit ? itemEdit.blog_title : "",
  };
  const yupSchema = Yup.object({
    blog_title: Yup.string().required("Required"),
    blog_excerpt: Yup.string().required("Required"),
    blog_image: Yup.string().required("Required"),
    blog_published_date: Yup.string().required("Required"),
    blog_category: Yup.string().required("Required"),
    blog_reading_time: Yup.string().required("Required"),
    blog_author: Yup.string().required("Required"),
    blog_content: Yup.string().required("Required"),
  });
  return (
    <>
      <ModalWrapper>
        <div
          className="modal-side absolute top-1/2 left-1/2 bg-primary  -translate-x-1/2 
      -translate-y-1/2 max-w-[1200px] w-full border border-line rounded-md"
        >
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0">Add Blog</h5>
            <button onClick={handleClose}>
              <X />
            </button>
          </div>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate({
                ...values,
                blog_image:
                  (itemEdit?.blog_image === "" && photo) ||
                  (!photo && "") ||
                  (photo === undefined && "") ||
                  (photo && itemEdit?.blog_image !== photo?.name)
                    ? photo?.name || ""
                    : itemEdit?.blog_image || "",
              });
              uploadPhoto();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="grid grid-cols-[1fr,_1fr,_1.5fr] gap-5">
                    <div className="form-wrapper p-4 max-h-[80vh] h-full overflow-y-auto custom-scroll">
                      <div className="input-wrap">
                        <InputText
                          label="Title"
                          type="text"
                          name="blog_title"
                        />
                      </div>
                      <div className="instruction">
                        <div className="input-wrap">
                          <InputTextArea
                            label="Excerpt"
                            name="blog_excerpt"
                            className="overflow-y-auto custom-scroll p-2 !h-[100px] outline-none  w-full rounded-md bg-primary text-body border border-line resize-none mb-5"
                          />
                        </div>
                        <div className="input-wrap relative  group input-photo-wrap h-[150px] mb-10">
                          <label htmlFor="">Photo</label>
                          {itemEdit === null ? (
                            <div className="w-full  rounded-md flex justify-center items-center flex-col h-full border border-line">
                              <ImagePlusIcon
                                size={50}
                                strokeWidth={1}
                                className="opacity-20 group-hover:opacity-50 transition-opacity"
                              />
                              <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                                Upload Photo
                              </small>
                            </div>
                          ) : (
                            <img
                              src={
                                itemEdit === null
                                  ? URL.createObjectURL(photo) // preview
                                  : imgPath + "/" + itemEdit?.blog_image // check db
                              }
                              alt="employee photo"
                              className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto `}
                            />
                          )}
                          <InputPhotoUpload
                            name="photo"
                            type="file"
                            id="photo"
                            accept="image/*"
                            title="Upload photo"
                            onChange={(e) => handleChangePhoto(e)}
                            onDrop={(e) => handleChangePhoto(e)}
                            className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full ${
                              mutation.isPending ? "pointer-events-none" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="time pt-5">
                      <div className="input-wrap">
                        <InputText
                          label="Date"
                          type="date"
                          name="blog_published_date"
                        />
                      </div>
                      <div className="input-wrap">
                        <InputSelect label="Category" name="blog_category">
                          <option value="" hidden>
                            Select Category
                          </option>
                          <option value="branding">Branding</option>
                          <option value="shirt">Shirt</option>
                          <option value="pants">Pants</option>
                        </InputSelect>
                      </div>
                      <div className="input-wrap">
                        <InputText
                          label="Reading Time"
                          type="text"
                          name="blog_reading_time"
                        />
                      </div>
                      <div className="input-wrap">
                        <InputText
                          label="Author"
                          type="text"
                          name="blog_author"
                        />
                      </div>
                    </div>
                    <div className="description pt-5 pr-5">
                      <div className="input-wrap">
                        <InputTextArea
                          label="Content"
                          name="blog_content"
                          className="overflow-y-auto custom-scroll p-2 !h-[350px] outline-none  w-full rounded-md bg-primary text-body border border-line resize-none mb-5"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 mt-5">
                    <button className="btn btn-accent" type="submit">
                      {mutation.isPending && <SpinnerButton />}
                      {itemEdit ? "Save" : "Add"}
                    </button>
                    <button
                      className="btn btn-cancel"
                      onClick={handleClose}
                      type="reset"
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddBlog;
