import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Joseph Uguru-Okorie. I am a Software and DevOps Engineer
          with years of industrial experience, and have also designed,
          developed, built and monitored applications, too. My skills cover
          frontend, backend and devops with the use of different programming
          languages such as Python (Django and Flask) and JavaScript (Reactjs
          and nodejs) in developing Full-Stack Software Applications. I also pay
          adept attention to testing and maintaining proper security of
          applications while building Pipelines with the use of tools such as
          Jenkins, SONARQUBE, OWASP DEPENDENCY CHECK, TRIVY etc.
          Containerization of applications with docker, and deployments, using
          kubernates/ArgoCD on AWS Services/Resources. These, all fall within my
          area of expertise. Some other tools I work with include: Terraform,
          Ansible, Linux/Bash Scripting, GitHub etc.
        </p>
      </div>
    </div>
  );
};

export default About;
