import { useContext } from "react";
import { ChosenLinkContext } from "./ChosenLinkContext";

export const useLink = () => useContext(ChosenLinkContext);