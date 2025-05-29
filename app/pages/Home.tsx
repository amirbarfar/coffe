import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Course from "./Course";
import Comments from "./Comments";
import Shop from "./Shop";

export default function main() {
    return (
        <div>
            <Navbar />
            <Hero/>
            <Course/>
            <Comments/>
            <Shop/>
        </div>
    )
}

