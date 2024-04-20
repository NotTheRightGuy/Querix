//create an atom for connection string
import { atom } from "recoil";
const connectionString = atom({
  key: "connectionString",
    default: "",
});

export default connectionString;