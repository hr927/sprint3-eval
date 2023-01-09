import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const Projects = ({ projects }) => {
  const router = useRouter();
  console.log(projects);
  const handleClick = (url) => {
    console.log(url);

    <Link href={url} />;
  };
  return (
    <div
      style={{ backgroundColor: "skyblue", width: "100%", paddingTop: "100px" }}
    >
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "10px",
          width: "60%",
          margin: "auto",
        }}
      >
        {projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => router.push(proj.html_url)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              border: "1px solid grey",
              padding: "5px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            <h2>{proj.name}</h2>
            <h4>{proj.description ? proj.description : "-"}</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                textAlign: "start",
                width: "80%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "start",
                  gap: "10px",
                }}
              >
                <div style={{ fontSize: "18px" }}>
                  Star Count: {proj.stargazers_count}
                </div>
                <div style={{ fontSize: "18px" }}>
                  Fork Count: {proj.forks_count}
                </div>
              </div>
              <div style={{ textAlign: "end", fontSize: "18px" }}>
                {proj.language}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

export async function getStaticProps(context) {
  let response = await fetch(
    `https://api.github.com/search/repositories?q=user:hr927+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await response.json();
  return {
    props: {
      projects: data.items,
    },
  };
}
