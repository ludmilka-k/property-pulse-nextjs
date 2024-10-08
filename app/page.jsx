import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import connectDB from "@/config/database.js"

const Homepage = async () => {
    await connectDB();
    return (
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties />
        </>
    );
};
export default Homepage;