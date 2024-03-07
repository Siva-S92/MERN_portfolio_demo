import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/portfolioSlice";
import axios from "axios";
import {message} from 'antd'

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.portfolio);

  const onfinish = async (values) => {
    try {
        const tempSkills = values.skills.split(",");
        values.skills = tempSkills;
        dispatch(showLoading);
        const response = await axios.post(`/api/portfolio/update-about`,{
            ...values,
            _id: portfolioData.about._id,
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
      <Form onFinish={onfinish} layout="vertical" 
      initialValues={{
        ...portfolioData.about,
        skills: portfolioData.about.skills.join(" , "),
      }}>
        <Form.Item name="lottieUrl" label="Lottie URL">
          <Input placeholder="Lottie URL" />
        </Form.Item>
        <Form.Item name="description1" label="Description1">
          <Input.TextArea
            style={{ height: "130px" }}
            placeholder="Description1"
          />
        </Form.Item>
        <Form.Item name="description2" label="Description2">
          <Input.TextArea
            style={{ height: "130px" }}
            placeholder="Description2"
          />
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <Input placeholder="Skills" />
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

export default AdminAbout;
