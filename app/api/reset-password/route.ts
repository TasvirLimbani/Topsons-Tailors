import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { reset_token, new_password } = body;

        if (!reset_token || !new_password) {
            return NextResponse.json({
                status: false,
                message: "Token & new password required",
            });
        }

        // ✅ Send FORM-DATA to PHP API
        const formData = new FormData();
        formData.append("reset_token", reset_token);
        formData.append("new_password", new_password);

        const res = await fetch(
            "http://topsons.mooo.com/api/auth/resetpassword.php",
            {
                method: "POST",
                body: formData, // ✅ NOT JSON
            }
        );

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            status: false,
            message: "Server error",
        });
    }
}