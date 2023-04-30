import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Shared/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/Shared/News/News/News";
import Login from "../Pages/Shared/User/Login/Login";
import LoginLayout from "../Layout/LoginLayout";
import Register from "../Pages/Shared/User/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsAndCondition from "../Pages/Shared/T&C/TermsAndCondition";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path: '/',
          element: <Navigate to='/category/0'></Navigate>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'terms',
          element: <TermsAndCondition></TermsAndCondition>
        }
      ]
    },
    {
      path: "category",
      element: <Main></Main>,
      children: [
        {
          path: ':id',
          element: <Category></Category>,
          loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        }
      ]
    },
    {
      path: 'news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><News></News></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);

export default router;