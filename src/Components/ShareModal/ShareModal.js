import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TelegramShareButton,
  TelegramIcon,
  ViberShareButton,
  ViberIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ShareModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Share</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Share to any social media
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FacebookShareButton url={props.url}>
              <FacebookIcon size={40} />
            </FacebookShareButton>
            <FacebookMessengerShareButton url={props.url}>
              <FacebookMessengerIcon size={40} />
            </FacebookMessengerShareButton>
            <WhatsappShareButton url={props.url}>
              <WhatsappIcon size={40} />
            </WhatsappShareButton>
            <TwitterShareButton url={props.url}>
              <TwitterIcon size={40} />
            </TwitterShareButton>
            <TelegramShareButton url={props.url}>
              <TelegramIcon size={40} />
            </TelegramShareButton>
            <ViberShareButton url={props.url}>
              <ViberIcon size={40} />
            </ViberShareButton>
            <EmailShareButton url={props.url}>
              <EmailIcon size={40} />
            </EmailShareButton>
            <RedditShareButton url={props.url}>
              <RedditIcon size={40} />
            </RedditShareButton>
            <PinterestShareButton url={props.url}>
              <PinterestIcon size={40} />
            </PinterestShareButton>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
