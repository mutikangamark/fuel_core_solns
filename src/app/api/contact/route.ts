import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // TODO: Add your email service or database logic here
    console.log("Contact form submission:", validatedData);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    
    // Return validation errors with details
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { 
          message: "Validation failed",
          errors: error.message 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
