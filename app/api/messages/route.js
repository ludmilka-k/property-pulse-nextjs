import connectDB from "@/config/database";
import Message from "@/models/Message";
import {getSessionUser} from "@/utiles/getSessionUser";

export const dynamic = "force-dynamic";

// POST  /api/messages
export const POST = async (request) => {
    try {
        await connectDB();

        const { name, email, phone, message, property, recipient } = await request.json();

        const sessionUser = await getSessionUser();

        if (!sessionUser || !sessionUser.user) {
            return new Response(JSON.stringify({message: "You must be logged in to sent a message"}), {status: 401});
        }

        const { user } = sessionUser;

        // Cannot sent message to self
        if (user.id === recipient) {
            return new Response(JSON.stringify({message: "Cannot sent a message to yourself"}), {status: 400});
        }

        const newMessage = new Message({
            sender: user.id,
            recipient,
            name,
            email,
            phone,
            message,
            property,
            body: message,
        });

         await newMessage.save();

         return new Response(JSON.stringify({message: "Message Sent"}), {status: 200});
    } catch (error) {
        console.log(error);
        return new Response("Something Went Wrong!", {status: 500});
    }
}