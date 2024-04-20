import { useRecoilValue } from 'recoil';
import  connectionString  from '../atom/connectionString';

// Custom hook to get the values of the connectionString atom
const useConnectionString = (): string => {
    const stringValue = useRecoilValue(connectionString);
    return stringValue;
};
export default useConnectionString;
