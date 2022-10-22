import React from 'react';
import Button from 'react-bootstrap/Button';
import {
    FaGoogle,
    FaGithub,
    FaYoutube,
    FaFacebook,
    FaPinterest,
    FaTwitter,
    FaTelegram,
    FaDiscord,
    FaFileInvoice,
    FaNewspaper

} from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSIdeNav = () => {
    return (
        <div>
            <div className="my-2 d-grid gap-2">
                <Button variant="outline-primary" size="lg">
                    <FaGoogle></FaGoogle> Login with Google
                </Button>
                <Button variant="outline-dark" size="lg">
                    <FaGithub></FaGithub> Login with GitHub
                </Button>
            </div>
            <div className="my-4 d-grid gap-2">
                <h4 className='text-start' >Find us on</h4>
                <Button className='shadow-sm text-start' variant="light" size="lg">
                    <FaYoutube></FaYoutube> YouTube
                </Button>
                <Button className='shadow-sm text-start' variant="light" size="lg">
                    <FaFacebook></FaFacebook> Facebook
                </Button>
                <Button className='shadow-sm text-start' variant="light" size="lg">
                    <FaPinterest></FaPinterest> Pinterest
                </Button>
                <Button className='shadow-sm text-start' variant="light" size="lg">
                    <FaTwitter></FaTwitter> twitter
                </Button>
                <Button className='shadow-sm text-start' variant="light" size="lg">
                    <FaTelegram></FaTelegram> Telegram
                </Button>
                <Button className='shadow-sm text-start' variant="light" size="lg">
                    <FaDiscord></FaDiscord> Discord
                </Button>
                <Button className='shadow-sm text-start' variant="secondary" size="lg">
                    <FaFileInvoice></FaFileInvoice> Privacy Policy
                </Button>
                <Button className='shadow-sm text-start' variant="secondary" size="lg">
                    <FaNewspaper></FaNewspaper> Terms & Condition
                </Button>
            </div>
            <div className="my-3">
                <BrandCarousel></BrandCarousel>
            </div>
        </div>

    );
};

export default RightSIdeNav;