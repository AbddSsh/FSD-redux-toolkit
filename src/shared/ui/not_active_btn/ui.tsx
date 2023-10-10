import React, { ReactNode } from "react";
import { AddToBasketIcon } from "shared/icons/AddToBasket";
import { IBasketCard } from "shared/types";

interface NotActiveBtnProps {
  text: string;
  fontsize: string;
}

export const NotActiveBtn: React.FC<NotActiveBtnProps> = ({
  text,
  fontsize,
}) => {
  return (
    <div className="not-active-btn">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: `${fontsize}`,
        }}
      >
        {text}
      </div>
    </div>
  );
};
