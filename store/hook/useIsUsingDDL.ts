import isUsingDDL from "../atom/usingDDL";
import { useRecoilState } from "recoil";

export default function useIsUsingDDL() {
    const [usingDDL, setUsingDDL] = useRecoilState(isUsingDDL);

    return { usingDDL, setUsingDDL };
}
