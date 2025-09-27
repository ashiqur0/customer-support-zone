import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterBody = () => {

    return (
        <div className='md:mt-20 mt-5 md:p-20 p-5 grid md:grid-cols-6 grid-cols-1 gap-10 md:gap-0 footer-p'>
            <div className='col-span-2 md:text-left text-justify md:pr-15'>
                <h3 className='text-white  font-medium md:mb-4 mb-2'>CS — Ticket System</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-white  font-medium md:mb-4 mb-2'>Company</h3>
                <p>About Us</p>
                <p>Our Mission</p>
                <p>Contact Saled</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-white  font-medium md:mb-4 mb-2'>Services</h3>
                <p>Products & Services</p>
                <p>Customer Stories</p>
                <p>Download Apps</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-white  font-medium md:mb-4 mb-2'>Information</h3>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Join Us</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-white  font-medium md:mb-4 mb-2'>Social Links</h3>
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faXTwitter} />
                    <p>@CS — Ticket System</p>
                </div>
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <p>@CS — Ticket System</p>
                </div>
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <p>@CS — Ticket System</p>
                </div>
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>support@cst.com</p>
                </div>
                
            </div>
        </div>
    );
};

export default FooterBody;