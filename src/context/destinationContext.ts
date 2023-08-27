import { createContext } from "react";

export interface DestinationContextType {
    id: number;
    setId: (val: number) => void;
}

const DestinationContexe = createContext<DestinationContextType>({
    id: 0,
    setId: (_val: number) => { }
})

export default DestinationContexe;