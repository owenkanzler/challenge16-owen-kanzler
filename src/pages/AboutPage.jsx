import React from "react";
import Container from "../components/Container";

export default function AboutPage() {
  return (
    <section className="pt-[12rem] py-16 h-screen">
      <Container>
        <h2 className="text-3xl tracking-tight font-bold mb-8">About Me</h2>
        <div className="flex flex-col gap-4">
          <p>
            Software engineer filled with passion and ambition to create clean
            and user friendly code. I take pride in solving complex real world
            problems with innovative solutions. Using my expertise in the MERN
            stack, I have created a record of high quality apps that exceed my
            clients expectations.
          </p>
          <p>
            My toolbox of skills include Javascript, React, Next.js, Java,
            Python, MongoDB, Node.js, Express, Handlebar.js, MySQL, and
            Firebase. With my passion for software development I am constantly
            keeping up with industry best practices and using agile
            methodologies to succeed in such a competitive field.
          </p>
        </div>
      </Container>
    </section>
  );
}
