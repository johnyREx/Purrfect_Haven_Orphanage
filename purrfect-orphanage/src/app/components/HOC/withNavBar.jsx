"use client"
import { useRouter } from 'next/navigation';
import NavBar from '../core/NavBar';

const withNavBar = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const router = useRouter();
    const authRoutes = ['/signin', '/signup'];
    const isAuthRoute = authRoutes.includes(router.pathname);

    return (
      <>
        {!isAuthRoute && <NavBar />}
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withNavBar;