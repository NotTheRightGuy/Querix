import { atom } from "recoil";
// create type for storign sql database in atom

const schema = atom({
    key: "schema",
    default: ""
});

export default schema;
