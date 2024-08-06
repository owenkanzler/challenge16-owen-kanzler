import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="pt-16 w-full fixed bottom-0">
      <Container>
        <div className="bg-[#2a2a2a] border border-[#484848] border-b-0 p-4 rounded-t-xl flex justify-center gap-8 text-sm">
          <a
            href="https://www.linkedin.com/in/owenkanzler/"
            className="hover:text-[#999] duration-300 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/owenkanzler"
            className="hover:text-[#999] duration-300 transition-all"
          >
            Github
          </a>
        </div>
      </Container>
    </footer>
  );
}
