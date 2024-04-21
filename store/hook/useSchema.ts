import { useRecoilValue } from "recoil";
import schema from "../atom/schema";

// Custom hook to get the values of the schema atom
export default function useSchema() {
    const schemaInUse = useRecoilValue(schema);
    return schemaInUse;
}
