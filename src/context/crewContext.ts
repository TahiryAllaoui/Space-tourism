import { createContext } from "react";

export interface CrewContextType {
    id: number;
    setId: (val: number) => void;
}

const CrewContexe = createContext<CrewContextType>({
    id: 0,
    setId: (_val: number) => { }
})

export default CrewContexe;