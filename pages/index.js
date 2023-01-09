import Image from "next/image";
// import { Inter } from "@next/font/google";

import Link from "next/link";

export default function Home({ user }) {
  console.log(user);

  return (
    <div
      style={{ backgroundColor: "skyblue", width: "100%", paddingTop: "100px" }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          margin: "auto",
        }}
      >
        <div style={{ width: "50%", margin: "auto" }}>
          <h2>Hi I am,</h2>
          <h1>{user.name}</h1>
          <h2>{user.bio}</h2>
          <Link href="https://drive.google.com/file/d/1zg2VwVzGL_brz1-s6C9WiCaXey4tPZ_5/view?usp=sharing">
            <button
              style={{
                padding: "5px",
                fontSize: "20px",
                borderRadius: "5px",
                border: "1px solid #aeceed",
                backgroundColor: "#aeceed",
              }}
            >
              Resume
            </button>
          </Link>
        </div>
        <div style={{ width: "20%", margin: "auto" }}>
          <Image
            src={user.avatar_url}
            width="300"
            height="300"
            alt={user.name}
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "40px" }}>Tech Stack</h1>
        <div
          style={{
            display: "grid",
            gap: "5px",
            gridTemplateColumns: "repeat(4,1fr)",
            width: "50%",
            margin: "auto",
          }}
        >
          <h2
            style={{
              border: "1px solid black",
              padding: "2px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            HTML
          </h2>
          <h2
            style={{
              border: "1px solid black",
              padding: "2px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            CSS
          </h2>
          <h2
            style={{
              border: "1px solid black",
              padding: "2px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            JAVASCRIPT
          </h2>
          <h2
            style={{
              border: "1px solid black",
              padding: "2px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            REACT
          </h2>
          <h2
            style={{
              border: "1px solid black",
              padding: "2px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            TYPESCRIPT
          </h2>
          <h2
            style={{
              border: "1px solid black",
              padding: "2px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            REDUX
          </h2>
          <h2
            style={{
              border: "1px solid black",
              padding: "2px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            NEXTJS
          </h2>
          <h2
            style={{
              border: "1px solid black",
              padding: "2px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            CHAKRA-UI
          </h2>
          <h2
            style={{
              border: "1px solid black",
              padding: "2px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            C
          </h2>
          <h2
            style={{
              border: "1px solid black",
              padding: "2px",
              borderRadius: "5px",
              backgroundColor: "#80ceeb",
            }}
          >
            C++
          </h2>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "40px" }}>Education</h1>
        <div
          style={{
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            width: "50%",
            margin: "auto",
          }}
        >
          <div
            style={{
              margin: "auto",
              borderBottom: "1px solid black",
              width: "80%",
            }}
          >
            <h2>Full Stack Web Development</h2>
            <h3>07/2022 - Present | Masai School,Bengaluru</h3>
          </div>
          <div
            style={{
              margin: "auto",
              borderBottom: "1px solid black",
              width: "80%",
            }}
          >
            <h2>Bachelors of Technology, Computer Science Engineering</h2>
            <h3>
              08/2012 - 07/2016 | Manav Rachna College of Engineering,Faridabad
            </h3>
          </div>
          <div
            style={{
              margin: "auto",
              borderBottom: "1px solid black",
              width: "80%",
            }}
          >
            <h2>High School (CBSE)</h2>
            <h3>04/2011 - 03/2012 | Sachdeva Public School, Delhi</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  let response = await fetch(`https://api.github.com/users/hr927`);
  let data = await response.json();
  return {
    props: {
      user: data,
    },
  };
}
