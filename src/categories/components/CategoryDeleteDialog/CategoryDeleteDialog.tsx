import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import React from "react";
import { FormattedMessage } from "react-intl";

import { commonMessages } from "@saleor/intl";

const styles = (theme: Theme) =>
  createStyles({
    deleteButton: {
      "&:hover": {
        backgroundColor: theme.palette.error.main
      },
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText
    }
  });

export interface CategoryDeleteDialogProps extends WithStyles<typeof styles> {
  open: boolean;
  name: string;
  onClose();
  onConfirm();
}

const CategoryDeleteDialog = withStyles(styles, {
  name: "CategoryDeleteDialog"
})(({ classes, name, open, onConfirm, onClose }: CategoryDeleteDialogProps) => (
  <Dialog onClose={onClose} open={open}>
    <DialogTitle>
      <FormattedMessage
        defaultMessage="Delete category"
        description="dialog title"
        id="categoryDeleteDialogTitle"
      />
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        <FormattedMessage
          defaultMessage="Are you sure you want to remove {name}?"
          description="delete category"
          id="<categoryDeleteDialogContent<"
          values={{
            name: <strong>{name}</strong>
          }}
        />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>
        <FormattedMessage {...commonMessages.cancel} />
      </Button>
      <Button
        className={classes.deleteButton}
        variant="contained"
        onClick={onConfirm}
      >
        <FormattedMessage {...commonMessages.save} />
      </Button>
    </DialogActions>
  </Dialog>
));
CategoryDeleteDialog.displayName = "CategoryDeleteDialog";
export default CategoryDeleteDialog;
