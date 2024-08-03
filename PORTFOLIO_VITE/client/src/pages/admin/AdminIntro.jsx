import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/portfolioSlice";
import axios from "axios";
import {message} from 'antd'

function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.portfolio);

  const onfinish = async (values) => {
    try {
        dispatch(showLoading);
        const response = await axios.post(`${SERVER_URL}/api/portfolio/update-intro`,{
            ...values,
            _id: portfolioData.intro._id
        });
        dispatch(hideLoading);
        if(response.data.success){
            message.success(response.data.message)
        }
    } catch (error) {
        dispatch(hideLoading);
        message.error(error.message);
    }
  }
  return (
    <div>
      <Form onFinish={onfinish} layout="vertical" initialValues={portfolioData.intro}>
        <Form.Item name="welcomeText" label="Welcome Text">
          <Input placeholder="Welcome Text" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <Input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea
            style={{ height: "130px" }}
            placeholder="Description"
          />
        </Form.Item>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded">
            Update
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
