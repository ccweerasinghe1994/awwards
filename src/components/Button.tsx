import {FC, ReactNode} from "react";
//  <Button id={"watch-trailer"} title={"Watch Trailer"} leftIcon={<TiLocationArrow/>}
type Created = {
    id: string,
    title: string,
    leftIcon: ReactNode,
    containerClass: string

};

//                                 containerClass={"bg-yellow-300 flex-center gap-1"}/>
const Button: FC<Created> = (props) => {

    const {id, title, leftIcon, containerClass} = props;

    return (
        <button id={id}
                className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass} `}>
            {leftIcon}
            <span className={"relative incline-flex overflow-hidden font-general text-xs uppercase"}>
                <div>
                {title}
                </div>
            </span>
        </button>
    )
};

export default Button;