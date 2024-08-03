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

function AdminExperience() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.portfolio);
  const { experiences } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setselectedItemForEdit] = useState(null);
  

  

  const onfinish = async (values) => {
    try {
      dispatch(showLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post(`${SERVER_URL}/api/portfolio/update-experience`, {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post(`${SERVER_URL}/api/portfolio/add-experience`, values);
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
      const response = await axios.post(`${SERVER_URL}/api/portfolio/delete-experience`, {
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
            Add Experience
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="shadow-md border border-gray-300 rounded"
            >
              <h1 className="font-semibold border-b-2 text-center py-2">
                {experience.period}
              </h1>
              <div className="px-5 py-2">
                <h1 className="my-2">
                  <span className="font-bold">Role: </span>
                  {experience.company}
                </h1>
                <h1 className="my-2">
                  <span className="font-bold">Title: </span>
                  {experience.title}
                </h1>
                <p className="text-justify my-2">
                  <span className="font-bold">Description: </span>
                  {experience.description}
                </p>
                <div className="flex justify-end gap-2 my-2">
                  <button
                    className="border rounded px-5 bg-blue-500"
                    onClick={() => {
                      setselectedItemForEdit(experience);
                      setShowAddEditModal(true);
                    }}
                  >
                    edit
                  </button>
                  <button
                    className="border rounded px-3 bg-red-500"
                    onClick={() =>{
                      handleDelete(experience);
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
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
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
          <Form.Item name="period" label="Period">
            <Input placeholder="Period" />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <Input placeholder="Company" />
          </Form.Item>
          <Form.Item name="title" label="Title">
            <Input placeholder="Title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea
              style={{ height: "138px" }}
              placeholder="Description"
            />
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

export default AdminExperience;
