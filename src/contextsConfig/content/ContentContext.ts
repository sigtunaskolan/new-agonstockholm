import { createContext } from "react";
import ContentContext from "./contentType";
import initialContent from "./initialValue";

const ContentContextProvider = createContext<ContentContext>(initialContent);

export default ContentContextProvider;
