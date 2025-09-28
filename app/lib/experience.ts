export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  type: string;
}

export async function getExperiences(): Promise<Experience[]> {
  return [
    {
      title: "Faculty Member",
      company: "Governor Initiative for AI and Computing (GIAIC)",
      period: "March 2024 - Present",
      description: "Teaching and developing curriculum for AI and computing courses, focusing on practical skills and real-world applications. Mentoring students in their journey to become the next generation of tech talent.",
      skills: ["Teaching", "Curriculum Development", "AI Education", "Mentoring"],
      type: "Education"
    },
    {
      title: "Back End Developer",
      company: "Programmiers",
      period: "March 2024 - June 2024",
      description: "Developed scalable server-side applications and APIs. Focused on creating efficient, maintainable code and implementing best practices in backend architecture and database design.",
      skills: ["Node.js", "API Development", "Database Design", "System Architecture"],
      type: "Development"
    },
    {
      title: "Frontend Developer",
      company: "PearlQuest Interactive", 
      period: "June 2023",
      description: "Created responsive and accessible web interfaces using modern HTML and Bootstrap 5. Focused on user experience and cross-browser compatibility while maintaining clean, semantic code.",
      skills: ["HTML5", "Bootstrap 5", "Responsive Design", "UI/UX"],
      type: "Development"
    },
  ];
}