import React from "react";
import Container from "../components/Container";
import Project from "../components/Project";

const projects = [
  {
    title: "Icebreakers",
    link: "https://icebreaker-2kco.onrender.com/login",
    github: "https://github.com/colepatters/uofm-fsw-project-2",
    color: "#391714",
  },
  {
    title: "Boredom App",
    link: "https://owenkanzler.github.io/boredom-app/",
    github: "https://github.com/owenkanzler/boredom-app",
    color: "#37172F",
  },
];

export default function ProjectPage() {
  return (
    <section className="pt-[12rem] py-16 h-screen">
      <Container>
        <h2 className="text-3xl tracking-tight font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
