import { Area } from "@/domain";
import { Filters } from "./Filters";
import { ObjectInfo } from "./ObjectInfo";
import { useState } from "react";

export enum SidebarState {
    Filters,
    ObjectInfo,
}

interface SidebarProps {
    state: SidebarState;
    setAreas: Function;
    area: Area | null;
    closePopup: Function;
}

export const Sidebar = (props: SidebarProps) => {
    const [isHidden, isHiddenSet] = useState(false);
    
    return (
        isHidden ?
        <div>
            <button className="absolute ml-2 mt-2 text-5xl" style={{ zIndex: 2 }} onClick={() => isHiddenSet(false)}>➡️</button>
        </div> :
        <div>
            <div className="absolute w-96 h-full p-4 bg-white border-r-2 border-gray-300" style={{ zIndex: 1 }}>
                {
                    {
                        [SidebarState.Filters]: <Filters setAreas={props.setAreas} />,
                        [SidebarState.ObjectInfo]: <ObjectInfo area={props.area} closePopup={props.closePopup}></ObjectInfo>,
                    }[props.state]
                }

            </div>

            <button className="absolute ml-96 mt-2 text-5xl" style={{ zIndex: 2 }} onClick={() => isHiddenSet(true)}>⬅️</button>
        </div>
    )
}

