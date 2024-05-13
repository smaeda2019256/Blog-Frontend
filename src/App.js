import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Provider } from 'react-redux';
import store from './redux/store';
import LogIn from './pages/LogIn.js';
import AdminDashboard from './admin/AdminDashboard.js';
import CreatePost from './admin/CreatePost.js';
import EditPost from './admin/EditPost.js';
import AdminRoute from './components/AdminRoute.jsx';
import Layout from './admin/global/Layout.js';

const AdminDashboardHOC = Layout(AdminDashboard);


const App = () => {
  return(
    <>
      <ToastContainer />
      <Provider store={store}>
        <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<LogIn />}></Route>
              <Route path='/admin/dashboard' element={<AdminRoute> <AdminDashboardHOC /> </AdminRoute>}></Route>
              <Route path='/admin/post/create' element={<AdminRoute> <CreatePost /> </AdminRoute>}></Route>
              <Route path='/admin/post/edit/:id' element={<AdminRoute> <EditPost /> </AdminRoute>}></Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProSidebarProvider>
      </Provider>
    </>
  )
}

export default App;
