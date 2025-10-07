import { getProjectBySlug, urlFor, getProjects } from '@/app/lib/data';
import ProjectDetails from '@/app/components/projects/ProjectPage';
import { notFound } from 'next/navigation';

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = await getProjects();
  
  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const metadataBase = new URL(
    process.env.NODE_ENV === "development" 
      ? "http://localhost:3000" 
      : "https://mohammad-ali-rauf.vercel.app"
  );

  return {
    title: `${project.title} - Mohammad Ali`,
    description: project.overview,
    metadataBase,
    openGraph: {
      title: project.title,
      description: project.overview,
      url: `${metadataBase}/projects/${project.slug.current}`,
      images: [
        {
          url: urlFor(project.image).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.overview,
      images: [urlFor(project.image).width(1200).height(630).url()],
    },
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Process the image URL on the server
  const processedProject = {
    ...project,
    image: urlFor(project.image).width(800).height(600).fit('crop').url()
  };

  return <ProjectDetails project={processedProject} />;
}