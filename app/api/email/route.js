import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async() => {
    await ConnectDB()
}

LoadDB();



export async function POST(req) {
    const formData = await req.formData();
    const emailData = {
        email:`${formData.get('email')}`,
    }

    await EmailModel.create(emailData)

    return NextResponse.json({success:true,msg:"emial subscribed"})

    

    
}

export async function GET(req) {
    const emails = EmailModel.find({})
    return NextResponse({emails})
}


export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id")
    const deleteSub = await EmailModel.findByIdAndDelete(id);
    
    return NextResponse.json({success:true,msg:"EMail deleted"})
}