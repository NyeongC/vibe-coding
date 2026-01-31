import { NextResponse } from "next/server";
import { getProfile, getProjects } from "@/lib/data";

/**
 * GET /api/developer
 * 개발자 프로필과 포트폴리오를 한 번에 반환합니다.
 * AI/봇이 개발자 정보를 조회할 때 유용합니다.
 */
export async function GET() {
  const profile = getProfile();
  const projects = getProjects();

  return NextResponse.json({
    profile,
    projects,
    updatedAt: new Date().toISOString(),
  });
}
