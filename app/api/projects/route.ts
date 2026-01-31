import { NextResponse } from "next/server";
import { getProjects } from "@/lib/data";

/**
 * GET /api/projects
 * 포트폴리오 프로젝트 목록을 반환합니다.
 */
export async function GET() {
  const projects = getProjects();
  return NextResponse.json(projects);
}
