import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utiles/getSessionUser";

export const dynamic = "force-dynamic";

// POST  /api/bookmarks
export const POST = async (request) => {
    try {
        await connectDB();

        const { propertyId } = await request.json();

        const sessionUser = await getSessionUser();

        if (!sessionUser || !sessionUser.userId) {
            return new Response("User ID is required", {status: 401});
        }

        const { userId } = sessionUser;

        // Find user in database
        const user = await User.findById(userId);

        //Check if property is bookmarked
        let isBookmarked = user.bookmarks.includes(propertyId);

        let message;

        if (isBookmarked) {
            // If already bookmarked, remove it
            user.bookmarks.pull(propertyId);
            message = "Bookmark removed successfully";
            isBookmarked = false;
        } else {
            // If not bookmarked, add it
            user.bookmarks.push(propertyId);
            message = "Bookmark added successfully";
            isBookmarked = true;
        }

        await user.save();

        return new Response(JSON.stringify({message, isBookmarked}), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Something Went Wrong!", {status: 500});
    }
};