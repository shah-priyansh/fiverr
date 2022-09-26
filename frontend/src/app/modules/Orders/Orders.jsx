import React, { useEffect, useState, useMemo } from "react";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import lodash from "lodash";
import Button from "@material-ui/core/Button";
import { AddDialog } from "../../components/Dialog/AddDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  createCard,
  editCard,
  getCardData,
} from "../../../redux/action/CardAction";

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    padding: "0 20px",
    borderRadius: "5px",
    marginInline: "1rem",
    paddingTop: "4.5rem",
    height: "90%",
    width: "93%",
  },
  gridContainer: {
    display: "flex",
    flex: 1,
    gap: "1rem",
    width: "100%",
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
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.card.cards);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState(1);
  const [edit, setEdit] = React.useState(false);
  const [editData, setEditData] = React.useState("");

  useEffect(() => {
    dispatch(getCardData());
  }, [dispatch, open]);

  const [isToggled, setIsToggled] = useState(false);
  const toggle = () => setIsToggled(!isToggled);

  const data = lodash.groupBy(todosState, "status");
  const addCard = () => {
    const productData = {
      status,
      amount,
    };

    if (edit === true) {
      dispatch(editCard(editData, productData));
    } else {
      dispatch(createCard(productData));
    }

    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setEdit(false);
  };

  const newItems = useMemo(() => {
    return data["New Order"];
  }, [data]);

  const inProgressItems = useMemo(() => {
    return data["In Progress"];
  }, [data]);

  const deliveredItems = useMemo(() => {
    return data["Delivered"];
  }, [data]);

  const completedItems = useMemo(() => {
    return data["Completed"];
  }, [data]);

  return (
    <>
      <div style={styles.container}>
        <Button
          variant="outlined"
          style={{ marginBottom: "1rem" }}
          color="primary"
          onClick={() => setOpen(!open)}
        >
          Open card dialog
        </Button>
        <div>
          {" "}
          <AddDialog
            open={open}
            handleClose={handleClose}
            status={status}
            amount={amount}
            setStatus={setStatus}
            setAmount={setAmount}
            addCard={addCard}
            edit={edit}
          />
        </div>
        <div style={styles.gridContainer}>
          <div style={styles.category}>
            <div style={styles.sectionHeader}>NEW ORDERS</div>
            {newItems?.map((item, index) => (
              <OrderCard
                key={item._id}
                props={item}
                clicked={isToggled}
                toggle={toggle}
                setOpen={setOpen}
                setStatus={setStatus}
                setAmount={setAmount}
                setEdit={setEdit}
                setEditData={setEditData}
              />
            ))}
          </div>
          <div style={styles.category}>
            <div style={styles.sectionHeader}>IN PROGRESS</div>
            {inProgressItems?.map((item, index) => (
              <OrderCard
                key={item._id}
                props={item}
                clicked={isToggled}
                toggle={toggle}
                setOpen={setOpen}
                setStatus={setStatus}
                setAmount={setAmount}
                setEdit={setEdit}
                setEditData={setEditData}
              />
            ))}
          </div>
          <div style={styles.category}>
            <div style={styles.sectionHeader}>WAITING FOR BUYER</div>
            {deliveredItems?.map((item, index) => (
              <OrderCard
                key={item._id}
                props={item}
                clicked={isToggled}
                toggle={toggle}
                setOpen={setOpen}
                setStatus={setStatus}
                setAmount={setAmount}
                setEdit={setEdit}
                setEditData={setEditData}
              />
            ))}
          </div>
          <div style={styles.category}>
            <div style={styles.sectionHeader}>COMPLETED</div>
            {completedItems?.map((item, index) => (
              <OrderCard
                key={item._id}
                props={item}
                clicked={isToggled}
                toggle={toggle}
                setOpen={setOpen}
                setStatus={setStatus}
                setAmount={setAmount}
                setEdit={setEdit}
                setEditData={setEditData}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
