import { NextResponse } from "next/server";
import Ticket from "../(models)/Ticket";

export async function POST(req) {
  try {
    const body = req.json();

    const ticketData = body.formData;

    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 400 });
  }
}
