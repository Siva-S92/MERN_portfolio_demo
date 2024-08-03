import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Modal, message } from "antd";
import {
  hideLoading,
  setReloadData,
  showLoading,
} from "../../redux/portfolioSlice";
import axios from "axios";
import { SERVER_URL } from "../../static_data/constant";

function AdminCourses() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.portfolio);
  const { courses } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setselectedItemForEdit] = useState(null);
  

  

  const onfinish = async (values) => {
    try {
      dispatch(showLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post(`${SERVER_URL}/api/portfolio/update-course`, {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post(`${SERVER_URL}/api/portfolio/add-course`, values);
      }
      
      if (response.data.success) {
        dispatch(hideLoading());
        message.success(response.data.message);
        setShowAddEditModal(false);
        setselectedItemForEdit(null);
        dispatch(setReloadData(true));
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
      
    }
  };

  const handleDelete = async (item) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(`${SERVER_URL}/api/portfolio/delete-course`, {
        _id: item._id,
      });
      
      if (response.data.success) {
        dispatch(hideLoading());
        message.success(response.data.message);
        dispatch(setReloadData(true));
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error(error.message);
    }
  };

  return (
    <>
      <div>
        <div className="flex justify-end my-2">
          <button
            className="border rounded bg-gray-600 text-white px-5 py-1"
            onClick={() => {
              setselectedItemForEdit(null);
              setShowAddEditModal(true);
            }}
          >
            Add Course
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
          {courses.map((course, index) => (
            <div
              key={index}
              className="shadow-md border border-gray-300 rounded"
            >
              <h1 className="font-semibold border-b-2 text-center py-2">
              <span className="font-bold">Title: </span>
                {course.title}
              </h1>
              <div className="px-5 py-2">
                {/* <h1 className="my-2">
                  <span className="font-bold">Image: </span>
                  {course.image}
                </h1> */}
                <img className="h-[150px] w-[220px] mx-auto rounded-lg" src={course.image} alt="image not available" />
                <p className="text-justify my-2">
                  <span className="font-bold">Description: </span>
                  {course.description}
                </p>
                <h1 className="my-2">
                  <span className="font-bold">Link: </span>
                  {course.link}
                </h1>
                <div className="flex justify-end gap-2 my-2">
                  <button
                    className="border rounded px-5 bg-blue-500"
                    onClick={() => {
                      setselectedItemForEdit(course);
                      setShowAddEditModal(true);
                    }}
                  >
                    edit
                  </button>
                  <button
                    className="border rounded px-3 bg-red-500"
                    onClick={() =>{
                      handleDelete(course);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      { (showAddEditModal || selectedItemForEdit) && (<Modal
        open={showAddEditModal}
        title={selectedItemForEdit ? "Edit Course" : "Add Course"}
        width="75%"
        onCancel={() => {
          setShowAddEditModal(false);
          setselectedItemForEdit(null);
        }}
        footer={null}
      >
        <Form
          onFinish={onfinish}
          layout="vertical"
          initialValues={selectedItemForEdit}
        >
          <Form.Item name="title" label="Title">
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item name="image" label="Image">
            <Input placeholder="Image" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea
              style={{ height: "138px" }}
              placeholder="Description"
            />
          </Form.Item>
          <Form.Item name="link" label="Link">
            <Input placeholder="Link" />
          </Form.Item>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="border border-red-500 rounded  text-red-500 px-3 py-1"
              onClick={() => {
                setShowAddEditModal(false);
                setselectedItemForEdit(null);
              }}
            >
              cancel
            </button>
            <button
              type="submit"
              className="border rounded border-blue-500 text-blue-500 px-5 py-1"
            >
              {selectedItemForEdit ? "update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>)}
    </>
  );
}

export default AdminCourses;
