import React from "react";
import PropTypes from "prop-types";
import { Dialog, DialogContent, DialogTitle, Button } from "@material-ui/core";

const Popup = ({ open, onClose, title, children, actions }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {actions && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "8px",
          }}
        >
          {actions.map((action, index) => (
            <Button key={index} onClick={action.onClick} color={action.color}>
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </Dialog>
  );
};

Popup.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      color: PropTypes.oneOf(["primary", "secondary"]),
    })
  ),
};

Popup.defaultProps = {
  title: null,
  actions: null,
};

export default Popup;
