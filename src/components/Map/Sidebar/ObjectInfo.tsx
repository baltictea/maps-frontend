import { Area } from "@/domain";

interface ObjectInfoProps {
    area: Area | null;
    closePopup: Function;
}

export const ObjectInfo = (props: ObjectInfoProps) => {
    const closeButtonStyle =
        "absolute right-1 top-1 " + // location
        "border-2 border-gray-300 rounded " + // border
        "drop-shadow-sm " + // shadow
        "hover:bg-gray-200 active:bg-gray-300 select-none"; // inner
    return (
        <div className="flex flex-col whitespace-pre gap-4">
            <button className={closeButtonStyle} onClick={() => props.closePopup()}>❌</button>
            <section className="border-b-2 text-2xl font-semibold">{props.area?.name}</section>
            <section className="text-wrap">{JSON.stringify(props.area, null, 2) ?? ""}</section>
        </div>
    )
}