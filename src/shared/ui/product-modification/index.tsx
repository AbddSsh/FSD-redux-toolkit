import { Radio, RadioChangeEvent, Space } from "antd";
import { FC, useState } from "react";
import styles from "./styles.module.css";

interface ProductModificationProps {
  price: {
    id: number;
    price: number;
    name?: string;
  }[];
  handleOptionChange?: (mode: PriceMode) => void;
}

export interface PriceMode {
  id: number;
  price: number;
  name?: string;
}

export const ProductModification: FC<ProductModificationProps> = ({
  price,
  handleOptionChange,
}) => {
  const [value, setValue] = useState(price[0].id);
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    const selectedMode = price.find((mode) => mode.id === e.target.value);
    if (selectedMode && handleOptionChange) {
      handleOptionChange(selectedMode);
    }
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        {price.map((mode) => (
          <Radio className={styles.radio__btn} key={mode?.id} value={mode.id}>
            {mode?.name}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};
