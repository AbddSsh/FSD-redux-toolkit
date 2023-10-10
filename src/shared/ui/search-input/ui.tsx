import { Input } from "antd";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

interface SearchInputProps {
  value: string;
  handleChange: (e: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ value, handleChange }) => {
  const { t } = useTranslation();
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0px 0px 0px",
      }}
    >
      <Input
        value={value}
        placeholder={t("search")}
        bordered={false}
        onChange={(e) => handleChange(e.target.value)}
        style={{
          width: "100%",
          height: "40px",
          borderRadius: "15px",
          boxShadow: isFocus
            ? "0px 0px 15px rgba(0,0,0,0.35)"
            : "0px 0px 5px rgba(0,0,0,0.2)",
          background: "#fff",
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  );
};
