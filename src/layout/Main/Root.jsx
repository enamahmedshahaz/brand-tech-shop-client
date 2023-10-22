
import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/Shared/Navbar';
import Footer from '../../pages/Shared/Footer';

const Root = () => {
    return (
        <div className='font-lato'>
            <Navbar></Navbar>
            <div className='max-w-[1200px] bg-gray-200 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;