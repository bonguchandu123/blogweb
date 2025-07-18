import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

// 📌 POST: Create New Subscription
export async function POST(req) {
  try {
    await ConnectDB();

    const formData = await req.formData();
    const email = formData.get("email");

    if (!email) {
      return NextResponse.json({ success: false, msg: "Email is required" }, { status: 400 });
    }

    await EmailModel.create({ email });

    return NextResponse.json({ success: true, msg: "Email subscribed" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// 📌 GET: Get All Emails
export async function GET() {
  try {
    await ConnectDB();

    const emails = await EmailModel.find({});
    return NextResponse.json({ success: true, emails });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// 📌 DELETE: Delete by ID
export async function DELETE(req) {
  try {
    await ConnectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, msg: "ID is required" }, { status: 400 });
    }

    const deleted = await EmailModel.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ success: false, msg: "Email not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, msg: "Email deleted" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
