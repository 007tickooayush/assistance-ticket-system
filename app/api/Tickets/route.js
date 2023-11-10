import { NextResponse } from "next/server";
import Ticket from "@/app/(models)/Ticket";

export async function POST(req,res) {
	try {
		const body = await req.json();
		const ticketData = body.formData;
		console.log('ticketData :>> ', ticketData);
		await Ticket.create(ticketData);
    	return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  	} catch (error) {
    	return NextResponse.json({ message: "Error", error }, { status: 500 });
  	}
}

export async function GET(req){

	try {
		const tickets  = await Ticket.find();
		return NextResponse.json({ tickets },{status : 200});
	} catch (error) {
		return NextResponse.json({message: "Error", error}, {status: 500});
	}

}