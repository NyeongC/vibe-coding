import { NextResponse } from "next/server";
import { getProfile, getProjects } from "@/lib/data";

/**
 * GET /api/developer/context
 * AI/LLM이 "이 개발자는 누구인가?", "어떤 포트폴리오를 보유했는가?" 등의
 * 질문에 답할 수 있도록 텍스트 형식의 컨텍스트를 반환합니다.
 *
 * Accept: text/plain 또는 application/json 지원
 */
export async function GET(request: Request) {
  const profile = getProfile();
  const projects = getProjects();

  const contactLines = [
    profile.contact.email && `- 이메일: ${profile.contact.email}`,
    profile.contact.github && `- GitHub: ${profile.contact.github}`,
    profile.contact.linkedin && `- LinkedIn: ${profile.contact.linkedin}`,
    profile.contact.website && `- 웹사이트: ${profile.contact.website}`,
  ].filter(Boolean) as string[];

  const contextText = [
    `# 개발자 정보`,
    ``,
    `## 기본 정보`,
    `- 이름: ${profile.name}`,
    `- 한줄 소개: ${profile.tagline}`,
    ``,
    `## 자기소개`,
    ...profile.bio.map((p) => `- ${p}`),
    ``,
    `## 기술 스택`,
    profile.skills.join(", "),
    ``,
    `## 연락처`,
    ...contactLines,
    ``,
    `## 포트폴리오 프로젝트`,
    ...projects.map(
      (p) =>
        `- ${p.title}: ${p.description} [기술: ${p.techStack.join(", ")}]${p.link ? ` (배포: ${p.link})` : ""}${p.github ? ` (GitHub: ${p.github})` : ""}`
    ),
  ].join("\n");

  const accept = request.headers.get("accept") || "";

  if (accept.includes("text/plain")) {
    return new NextResponse(contextText, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }

  return NextResponse.json({
    context: contextText,
    profile,
    projects,
    usage: {
      description:
        "AI가 개발자에 대한 질문에 답할 때 이 컨텍스트를 참조하세요.",
      contentType: "text/plain 사용 시 Accept: text/plain 헤더를 보내세요.",
    },
  });
}
