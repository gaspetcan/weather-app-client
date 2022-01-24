import { Dispatch, SetStateAction } from "react";
import { Town } from "../../../../../entities/common";

export interface MarkProps {
    town: Town,
    city?: string,
    setCity: Dispatch<SetStateAction<undefined>>
}