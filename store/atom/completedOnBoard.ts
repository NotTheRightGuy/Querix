// create an atom to store if user has completed the on boarding process or not
import { atom } from 'recoil';
const completedOnBoard = atom<boolean>({
    key: 'completedOnBoard',
    default: false,
});

export default completedOnBoard;