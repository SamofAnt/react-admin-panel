import React from 'react'
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SourceIcon from '@mui/icons-material/Source';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useTranslation } from "react-i18next";
import "../../i18n"
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  const { t } = useTranslation();
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: t("widgets.sources.label"),
        isMoney: false,
        link: t("details.sources.label"),
        icon: (
          <SourceIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: t("widgets.resources.label"),
        isMoney: false,
        link: t("details.resources.label"),
        icon: (
          <AccountTreeIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: t("widgets.group.label"),
        isMoney: true,
        link: t("details.group.label"),
        icon: (
          <CollectionsBookmarkIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: t("widgets.registers.label"),
        isMoney: true,
        link: t("details.registers.label"),
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {/* {data.isMoney && "$"}  */}
          {amount}
        </span>
        <Link to="/sources" style={{ textDecoration: "none" }}>
        <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
         
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;