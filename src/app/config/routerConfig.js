import { AboutPage } from "../../pages/AboutPage/AboutPage";
import { MainPage } from "../../pages/MainPage/MainPage";
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
// import { SignInPage } from "../../pages/SignInPage/SigninPage";
import { SignUpPage } from "../../pages/SignUpPage/SignUpPage";

export const routerConfig = [
  {
    id: 0,
    path: '/',
    element: MainPage,
    header: true,
  },
  {
    id: 1,
    path: '/profile',
    element: ProfilePage,
    header: true,
  },
  {
    id: 2,
    path: '/about-us',
    element: AboutPage,
    header: true,
  },
  {
    id: 3,
    path: '/sign-up',
    element: SignUpPage,
    header: false,
  },
  // {
  //   id: 4,
  //   path: '/log-in',
  //   element: SignInPage,
  //   header: false,
  // },
]