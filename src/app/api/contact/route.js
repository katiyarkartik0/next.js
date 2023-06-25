import Contact from "@/app/models/contact";
import dbConnect from "@/app/utils/dbConn";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect();

        await Contact.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: e },
            { status: 500 }
        )
    }
}