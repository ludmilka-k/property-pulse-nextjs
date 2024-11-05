import {
    FacebookShareButton,
    TelegramShareButton,
    LinkedinShareButton,
    EmailShareButton,
    FacebookIcon,
    TelegramIcon,
    LinkedinIcon,
    EmailIcon,
} from "react-share";

const ShareButtons = ({ property }) => {
    const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;
    return (
        <>
            <h1 className="text-xl font-bold text-center pt-2">Share This Property:</h1>
            <div className='flex gap-3 justify-center pb-5'>
                <FacebookShareButton
                    url={shareUrl}
                    quote={property.name}
                    hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}
                >
                    <FacebookIcon size={40} round={true}/>
                </FacebookShareButton>

                <LinkedinShareButton
                    url={shareUrl}
                    title={property.name}
                    summary={property.description}
                    source={`PropertyPulse ${shareUrl}`}
                >
                    <LinkedinIcon size={40} round={true}/>
                </LinkedinShareButton>

                <TelegramShareButton
                    url={shareUrl}
                    title={property.name}
                >
                    <TelegramIcon size={40} round={true}/>
                </TelegramShareButton>

                <EmailShareButton
                    url={shareUrl}
                    subject={property.name}
                    body={`Check out this property listing: ${shareUrl}`}
                >
                    <EmailIcon size={40} round={true}/>
                </EmailShareButton>
            </div>
        </>
    );
};
export default ShareButtons;