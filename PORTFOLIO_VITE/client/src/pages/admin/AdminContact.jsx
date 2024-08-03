import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/portfolioSlice";
import axios from "axios";
import {message} from 'antd'
import { SERVER_URL } from "../../static_data/constant";

function AdminContact() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.portfolio);

  const onfinish = async (values) => {
    try {
        dispatch(showLoading);
        const response = await axios.post(`${SERVER_URL}/api/portfolio/update-contact`,{
            ...values,
            _id: portfolioData.contact._id
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
      <Form onFinish={onfinish} layout="vertical" initialValues={portfolioData.contact}>
        <Form.Item name="name" label="Name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile">
          <Input placeholder="Mobile" />
        </Form.Item>
        <Form.Item name="country" label="Country">
          <Input placeholder="Country" />
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

export default AdminContact;
