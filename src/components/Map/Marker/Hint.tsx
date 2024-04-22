import { useContext } from "react";

interface HintProps {
    hint: { YMapHintContext: any; };
}

export const Hint = (props: HintProps) => {
    const { YMapHintContext } = props.hint;

    const hintContext = useContext<{ hint: string }>(YMapHintContext);

    return (
        hintContext &&
        <div className="-translate-y-full bg-white p-1 border-black border-[1px]">
            {hintContext.hint}
        </div>)
}