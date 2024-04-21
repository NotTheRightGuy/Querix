import { atom } from "recoil";

// create an atom for connection string
type connection_str = {
  connection_string: string;
};

const connectionString = atom<connection_str[]>({
  key: "connectionString",
  default: [],
});

export default connectionString;
