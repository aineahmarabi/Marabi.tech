import TeamCarousel from "./TeamCarousel";
export default function Team(){
    return(
        <div className="font-raleway lg:w-[90%]">
            <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">Meet the Maestros</h1>
            <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">Five oddballs walked into a startup. Sounds like the setup for a bad joke, right? But nah, it&apos;s just us – the   code-slinging trio, the deal-maker, and the chaos-tamer. We&apos;re the square pegs who ditched the round holes and built our own damn shape. Conventional? Hell no. Effective? You bet your last line of buggy code we are.
            </p>
            <TeamCarousel />
        </div>
    );
}