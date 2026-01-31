import { NextResponse } from "next/server";
import { getProfile } from "@/lib/data";

/**
 * GET /api/profile
 * 개발자 프로필 정보를 반환합니다.
 */
export async function GET() {
  const profile = getProfile();
  return NextResponse.json(profile);
}
