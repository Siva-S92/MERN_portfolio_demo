import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Modal, message } from "antd";
import {
  hideLoading,
  setReloadData,
  showLoading,
} from "../../redux/portfolioSlice";
import axios from "axios";

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.portfolio);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setselectedItemForEdit] = useState(null);
  

  

  const onfinish = async (values) => {
    try {
      const tempTechnologies = values.technologies?.split(",") || [];
      values.technologies = tempTechnologies
      dispatch(showLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post(`${SERVER_URL}/api/portfolio/update-project`, {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post(`${SERVER_URL}/api/portfolio/add-project`, values);
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
      const response = await axios.post(`${SERVER_URL}/api/portfolio/delete-project`, {
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
            Add Project
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className="shadow-md border border-gray-300 rounded"
            >
              <h1 className="font-semibold border-b-2 text-center py-2">
              <span className="font-bold">Title: </span>
                {project.title}
              </h1>
              <div className="px-5 py-2">
                {/* <h1 className="my-2">
                  <span className="font-bold">Image: </span>
                  {project.image}
                </h1> */}
                <img className="h-[150px] w-[220px] mx-auto rounded-lg" src={project.image} alt="image not available" />
                <p className="text-justify my-2">
                  <span className="font-bold">Description: </span>
                  {project.description}
                </p>
                <h1 className="my-2">
                  <span className="font-bold">Link: </span>
                  {project.link}
                </h1>
                <h1 className="my-2">
                  <span className="font-bold">Technologies: </span>
                  {project.technologies}
                </h1>
                <div className="flex justify-end gap-2 my-2">
                  <button
                    className="border rounded px-5 bg-blue-500"
                    onClick={() => {
                      setselectedItemForEdit(project);
                      setShowAddEditModal(true);
                    }}
                  >
                    edit
                  </button>
                  <button
                    className="border rounded px-3 bg-red-500"
                    onClick={() =>{
                      handleDelete(project);
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
        title={selectedItemForEdit ? "Edit Project" : "Add Project"}
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
          initialValues={{
            ...selectedItemForEdit,
            technologies: selectedItemForEdit?.technologies?.join(" , ")
          }}
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
          <Form.Item name="technologies" label="Technologies">
            <Input placeholder="Technologies" />
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

export default AdminProjects;
