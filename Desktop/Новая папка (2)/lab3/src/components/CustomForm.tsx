import { Form, Input, Select, Checkbox, Button } from 'antd';
import {useEffect, useState} from 'react';
import './CustomForm.css';
import {RootState} from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {add, LoginData, update} from "../features/loginSlice";



const { Option } = Select;

export function CustomForm() {
  const login = useSelector((state:RootState)=>state.login.value)

  const dispatch = useDispatch();
  useEffect(()=>{
    let login = localStorage.getItem("login");
    let password = localStorage.getItem("password");
    if (login && password){
      dispatch(add({name:login, password:password}));
    }
  },[])

  const [nick, setNick] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (values: any) => {
    let login = localStorage.getItem("login");
    let password = localStorage.getItem("password");
    if (login && password){
      alert("Already loged in");
      return;
    }
    else{
      alert("ERROR");
    }

    dispatch(add({name:values.nickname, password:values.password}));
    setLoading(true);
    setTimeout(()=>{
      localStorage.setItem("login", values.nickname);
      localStorage.setItem("password", values.password);
      setLoading(false);
    }, 3000);

  };

  return (
      <>
        {loading ?(<h1>Loading</h1>):(
            <Form
            style={{ width: '30%', margin: '0 auto' }}
            onFinish={onSubmit}
            scrollToFirstError
        >
          <Form.Item
              name="nickname"
              label="Nickname"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ]}
          >
            <Input onChange={(e) => setNick(e.target.value)} />
          </Form.Item>

          <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                        new Error('The two passwords that you entered do not match!')
                    );
                  },
                }),
              ]}
          >
            <Input.Password />

          </Form.Item>

          <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input onChange={(e) => setPhone(e.target.value)} />
          </Form.Item>

          <Form.Item
              name="gender"
              label="Gender"
              rules={[{ message: 'Please select gender!' }]}
          >
            <Select placeholder="select your gender" onChange={(e) => setGender(e.target.value)}>
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
              name="agreement"
          >
            <Checkbox>
              I have read the{' '}
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Button type="primary" onClick={()=>dispatch(update({name:"Updated name", password:"Updated password"}))}>
            Update
          </Button>
          <Button type="primary" onClick={()=>console.log(login)}>
            Test
          </Button>
        </Form>)}
      </>

  );
}
