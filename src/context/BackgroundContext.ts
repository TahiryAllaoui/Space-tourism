import { createContext } from "react";

export interface BackgroundContextType {
    path: string;
    setPath: (val: string) => void;
}

const BackgroundContext = createContext<BackgroundContextType>({
    path: '',
    setPath: (_val: string) => { }
});

export default BackgroundContext;