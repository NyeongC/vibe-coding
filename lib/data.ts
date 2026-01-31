/**
 * 개발자 포트폴리오 공통 데이터
 * 웹사이트와 API에서 함께 사용됩니다.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  thumbnail?: string;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string[];
  skills: string[];
  contact: {
    email?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

const profile: Profile = {
  name: "바이브 코딩",
  tagline: "개발자 포트폴리오",
  bio: [
    "안녕하세요! 개발에 열정을 가진 개발자입니다. 문제 해결과 새로운 기술 학습을 좋아하며, 사용자 경험을 개선하는 것에 관심이 있습니다.",
    "여기에 자기소개를 작성하세요. 경력, 학력, 개발 철학 등을 자유롭게 적어보세요.",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Git",
  ],
  contact: {
    email: "your@email.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    website: "https://your-portfolio.vercel.app",
  },
};

const projects: Project[] = [
  {
    id: "1",
    title: "샘플 프로젝트 1",
    description:
      "프로젝트에 대한 간단한 설명을 여기에 작성하세요. 사용된 기술과 해결한 문제를 소개합니다. 팝업에서 더 자세한 내용을 확인할 수 있습니다.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://example.com/project1",
    github: "https://github.com/username/project1",
  },
  {
    id: "2",
    title: "샘플 프로젝트 2",
    description:
      "두 번째 프로젝트 설명입니다. 다양한 스택과 도전했던 경험을 담아보세요.",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "https://my-portfolio.vercel.app",
    github: "https://github.com/username/project2",
  },
  {
    id: "3",
    title: "샘플 프로젝트 3",
    description:
      "세 번째 프로젝트로 포트폴리오의 다양성을 보여줄 수 있습니다.",
    techStack: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/username/project3",
  },
];

export function getProfile(): Profile {
  return profile;
}

export function getProjects(): Project[] {
  return projects;
}
