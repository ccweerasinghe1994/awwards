import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.tsx";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })
    return (
        <div id={"about"} className={"min-h-screen w-screen"}>
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10px]">
                    Well come to CGNEXUS
                </h2>
                <AnimatedTitle className={"mt-5 !text-black text-center"}
                               title={"Disc<b>o</b>ver the World <br /> of Web <b>D</b>evelopment"}/>

                <div className="about-subtext">
                    <p className="">
                        CGNEXUS builds professional websites and web applications.
                    </p>
                    <p>
                        From design to e-commerce solutions,
                        we help businesses create an effective online presence. Contact us today!
                    </p>
                </div>
            </div>
            <div className="h-dvh w-screen" id={"clip"}>
                <div className="mask-clip-path about-image">
                    <img src={"/img/about.webp"} alt="background"
                         className="absolute left-0 top-0 size-full object-cover"/>
                </div>
            </div>
        </div>
    );
};

export default About;