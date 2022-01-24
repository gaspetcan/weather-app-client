import { Dispatch, SetStateAction } from "react";
import { Town } from "../../../../entities/common";

export interface MapProps {
    towns: Array<Town>
    setCity: Dispatch<SetStateAction<undefined>>
}