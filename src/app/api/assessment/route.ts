import { NextRequest, NextResponse } from "next/server";
import { assessmentFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = assessmentFormSchema.parse(body);

    // TODO: Add your assessment processing logic here
    console.log("Assessment form submission:", validatedData);

    return NextResponse.json(
      { message: "Assessment request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Assessment form error:", error);
    return NextResponse.json(
      { message: "Failed to process assessment request" },
      { status: 400 }
    );
  }
}
