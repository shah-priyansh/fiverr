import React, { useState } from "react";
import { cardData } from "../../../data";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import lodash from "lodash";
import Button from "@material-ui/core/Button";
import { AddDialog } from "../../components/Dialog/AddDialog";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    borderRadius: "5px",
    marginInline: "1rem",
    paddingTop: "4.5rem",
    height: "90%",
    gap: "1rem",
  },
  category: {
    backgroundColor: "#efeff1",
    height: "90%",
    flex: 1,
    padding: "1rem",
    borderRadius: "5px",
  },
  sectionHeader: {
    fontWeight: "600",
    color: "#9FAfAf",
  },
};

export const Orders = () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled(!isToggled);
  const data = lodash.groupBy(cardData, "status");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="">
        {" "}
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <AddDialog open={open} handleClose={handleClose} setOpen={setOpen} />
      </div>
      <div style={styles.container}>
        <div style={styles.category}>
          <div style={styles.sectionHeader}>NEW ORDERS</div>
          {data.new.map((item) => (
            <OrderCard
              key={item.id}
              props={item}
              clicked={isToggled}
              toggle={toggle}
            />
          ))}
        </div>
        <div style={styles.category}>
          <div style={styles.sectionHeader}>IN PROGRESS</div>
          {data.progress.map((item) => (
            <OrderCard
              key={item.id}
              props={item}
              clicked={isToggled}
              toggle={toggle}
            />
          ))}
        </div>
        <div style={styles.category}>
          <div style={styles.sectionHeader}>WAITING FOR BUYER</div>
          {data.waiting.map((item) => (
            <OrderCard
              key={item.id}
              props={item}
              clicked={isToggled}
              toggle={toggle}
            />
          ))}
        </div>
        <div style={styles.category}>
          <div style={styles.sectionHeader}>COMPLETED</div>
          {data.completed.map((item) => (
            <OrderCard
              key={item.id}
              props={item}
              clicked={isToggled}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </>
  );
};
