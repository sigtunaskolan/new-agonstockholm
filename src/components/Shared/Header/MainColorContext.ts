import { createContext } from "react";

const mainColor: string = "#52F597";

const MainColorContext = createContext<string>(mainColor);

export default MainColorContext;
