import { useRecoilValue } from "recoil";
import currentlyExecuting from "../atom/currentlyExecuting";

const useCurrentlyExecuting = () => {
    return useRecoilValue(currentlyExecuting);
};

export default useCurrentlyExecuting;
