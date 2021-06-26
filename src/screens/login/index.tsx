import { Form, Input, Button, Checkbox, message } from 'antd';
import axios from 'axios';

export const LoginScreen = () => {
    const getInfo = (id: Number) => {
        axios.get('/api/user/' + id, {
            headers: {
                token: localStorage.getItem("token")
            }
        }).then(res => {
            console.log(res)
        })
    }

    const onFinish = (values: any) => {
        const data = {
            username: values.username,
            password: values.password
        }
        axios.post(`/api/user/login`, data).then(res => {
            const response = res.data
            if (response.status !== 0) {
                console.log(response)
                message.error(response.error_message)
            } else {
                message.success("登录成功: username = " + response.data.user_name, 2)
                localStorage.setItem("userInfo", JSON.stringify(response.data))
                localStorage.setItem("token", response.data.access_token)
                getInfo(response.data.id)
            }
        })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <Form
            name="basic"

            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label={"Username"}
                name={"username"}
                rules={[{ required: true, message: "Please input your username!"}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label={"Password"}
                name={"password"}
                rules={[{ required: true, message: "Please input your password!"}]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
                <Button type={"primary"} htmlType={"submit"}>登录</Button>
            </Form.Item>
        </Form>
    )
}
