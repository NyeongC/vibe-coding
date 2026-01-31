"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

export type { Project };

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className="group flex cursor-pointer flex-col overflow-hidden p-0 transition-all hover:shadow-lg"
        onClick={() => setOpen(true)}
      >
        <div className="flex h-40 items-center justify-center bg-muted">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <span className="text-4xl font-light text-muted-foreground">
              {project.title.charAt(0)}
            </span>
          )}
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-6">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{project.title}</DialogTitle>
            <DialogDescription asChild>
              <p className="text-base leading-relaxed">{project.description}</p>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <h4 className="mb-2 text-sm font-medium text-foreground">기술 스택</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-medium text-foreground">링크</h4>
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="gap-2"
                    >
                      <Github className="size-4" />
                      GitHub
                      <ExternalLink className="size-3 opacity-70" />
                    </Link>
                  </Button>
                )}
                {project.link && (
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="gap-2"
                    >
                      <ExternalLink className="size-4" />
                      포트폴리오
                    </Link>
                  </Button>
                )}
                {!project.github && !project.link && (
                  <p className="text-sm text-muted-foreground">
                    등록된 링크가 없습니다.
                  </p>
                )}
              </div>
            </div>

            {(project.github || project.link) && (
              <div className="rounded-lg border bg-muted/50 p-3">
                <p className="mb-2 text-xs font-medium text-muted-foreground">
                  주소
                </p>
                <div className="space-y-1 text-sm">
                  {project.github && (
                    <p className="break-all">
                      <span className="font-medium text-muted-foreground">
                        GitHub:
                      </span>{" "}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline-offset-4 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.github}
                      </a>
                    </p>
                  )}
                  {project.link && (
                    <p className="break-all">
                      <span className="font-medium text-muted-foreground">
                        포트폴리오:
                      </span>{" "}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline-offset-4 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.link}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
