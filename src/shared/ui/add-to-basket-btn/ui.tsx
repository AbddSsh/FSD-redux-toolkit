import React, { ReactNode } from "react";
import { AddToBasketIcon } from "shared/icons/AddToBasket";
import { IBasketCard } from "shared/types";

interface AddToBasketBtnProps {
  onClick: (card: IBasketCard) => void;
  text: string;
  card: IBasketCard;
  fontsize: string;
}

export const AddToBasketBtn: React.FC<AddToBasketBtnProps> = ({
  onClick,
  text,
  card,
  fontsize,
}) => {
  return (
    <div className="main-btn" onClick={() => onClick(card)}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: fontsize,
            display: "flex",
            alignItems: "center",
            marginRight: "5px",
          }}
        >
          <AddToBasketIcon />
        </div>
        {text}
      </div>
    </div>
  );
};
