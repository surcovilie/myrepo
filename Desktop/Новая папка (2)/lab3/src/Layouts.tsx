import {Layout, Menu, Breadcrumb, Card, Button} from 'antd';
import { CustomForm } from './components/CustomForm';
import { IUser } from './components/interfaces';
import {Link} from "react-router-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import UserList from "./components/UserList";
import UserPage from "./components/UserPage";

const { Header, Content, Footer } = Layout;

const tabs: Array<String> = ['First', 'Second', 'Third', 'Secret'];

export const HeaderLayout = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu
        mode="horizontal"
        theme="dark"
        defaultSelectedKeys={['0']}
        style={{ justifyContent: 'center' }}
      >
        {tabs.map((tab, index) => (
          <Menu.Item key={index}>{tab}</Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};



export const MainLayout = () => {
  return (
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Link to={'/home'}><Breadcrumb.Item>Home</Breadcrumb.Item></Link>
          <Link to={'/'}><Breadcrumb.Item>App</Breadcrumb.Item></Link>
      </Breadcrumb>
      <Card bordered={false}>
              <Routes>
                  <Route path="/" element={<CustomForm />} />
                  {/*<Route path="/home" element={<UserList />}><Route path =":id" element={<UserPage />}></Route></Route>*/}
                  <Route path="/home" element={<UserList />}></Route>
                  <Route path ="/home/:id" element={<UserPage />}></Route>
              </Routes>
      </Card>
    </Content>
  );
};

export const FooterLayout = () => {
  return (
    <Footer style={{ textAlign: 'center', position: 'absolute', bottom: '0', width: '100%' }}>
      This app, created by
      <a href="https://github.com/surcovilie"> Ilia Surcov</a>
    </Footer>
  );
};
