import { useEffect, useState } from "react";
import Alert from "../alert";
import Snackbar from "@material-ui/core/Snackbar";

export default function Feedback({
  isOpen,
  onClose = () => {},
  severity,
  message,
}) {
  const [open, setOpen] = useState(isOpen);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={"top+right"}
        autoHideDuration={4000}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
