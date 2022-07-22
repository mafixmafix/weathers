import { Input } from "antd";

export interface SearchProps {
  onSearch: (value: string) => void;
  loading?: boolean;
}

export function Search({ onSearch, loading = false }: SearchProps) {
  return (
    <Input.Search
      placeholder="Search for a location"
      enterButton
      loading={loading}
      onSearch={onSearch}
    />
  );
}

export default Search;
