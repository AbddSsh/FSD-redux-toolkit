import React, { ReactNode } from "react";

interface CreateOrderBtnProps {
  onClick: () => void;
  text: string | ReactNode;
}

export const CreateOrderBtn: React.FC<CreateOrderBtnProps> = ({
  onClick,
  text,
}) => {
  return (
    <div className="main-btn" onClick={onClick}>
      {text}
    </div>
  );
};
