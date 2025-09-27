import FooterBody from './FooterBody';

const Footer = () => {
    return (
        <div className={`bg-slate-950  pb-5 text-gray-400`}>
            <FooterBody></FooterBody>
            <hr className='text-gray-500 text-center mx-5 mt-5 md:mt-0' />
            <h1 className='text-center text-white  mt-5'>© 2025 CS — Ticket System. All rights reserved.</h1>
        </div>
    );
};

export default Footer;