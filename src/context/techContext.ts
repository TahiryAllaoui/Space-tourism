import { createContext } from "react";

export interface TechContextType {
    id: number;
    setId: (val: number) => void;
}

const TechContexe = createContext<TechContextType>({
    id: 0,
    setId: (_val: number) => { },
})

export default TechContexe;