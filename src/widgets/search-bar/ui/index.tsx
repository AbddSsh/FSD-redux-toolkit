import { useEffect, useState } from "react";
import { catalogSlice, useAppDispatch } from "shared/store";
import { SearchInput } from "shared/ui/search-input";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(catalogSlice.actions.searchFilter(value));
  }, [value]);
  return <SearchInput value={value} handleChange={setValue} />;
};
