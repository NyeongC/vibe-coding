import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProfile, getProjects } from "@/lib/data";

const profile = getProfile();
const projects = getProjects();

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-24"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              바이브 코딩 첫 Next.js 플젝트
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {profile.tagline}
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              코딩 결과물을 모아 보여주는 개발자 포트폴리오 사이트입니다.
              <br />
              프로젝트를 추가하고 나만의 포트폴리오를 완성해 보세요.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#projects">프로젝트 보기</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">연락하기</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="border-t bg-muted/30 px-6 py-24"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              프로젝트
            </h2>
            <p className="mb-12 max-w-2xl text-muted-foreground">
              제가 작업한 프로젝트들입니다. 클릭하면 자세한 내용을 확인할 수
              있습니다.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* About Section */}
        <section
          id="about"
          className="px-6 py-24"
        >
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              소개
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                {profile.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed text-muted-foreground ${i < profile.bio.length - 1 ? "mb-6" : ""}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  기술 스택
                </h3>
                <div className="flex flex-wrap gap-3">
                  {profile.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="px-4 py-2 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-muted/30 px-6 py-24"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              연락처
            </h2>
            <p className="mb-10 text-muted-foreground">
              프로젝트 문의나 협업 제안이 있으시면 편하게 연락해 주세요.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {profile.contact.email && (
                <Button variant="outline" asChild>
                  <a href={`mailto:${profile.contact.email}`}>이메일</a>
                </Button>
              )}
              {profile.contact.github && (
                <Button variant="outline" asChild>
                  <Link
                    href={profile.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </Button>
              )}
              {profile.contact.linkedin && (
                <Button variant="outline" asChild>
                  <Link
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
