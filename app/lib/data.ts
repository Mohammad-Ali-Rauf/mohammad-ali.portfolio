import { groq } from 'next-sanity'
import { client } from './sanity'
import imageUrlBuilder from '@sanity/image-url'

import type { Project } from '../types/project'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export type Experience = {
  title: string,
  company: string,
  period: string,
  description: string,
  skills: string[],
  type: string
}

// Profile Data
export async function getProfile() {
  const query = groq`*[_type == "profile"][0] {
    name,
    title,
    bio,
    photo,
    birthDate,
    codingStartAge,
    socialLinks
  }`

  return await client.fetch(query)
}

// Experience Data
export async function getExperiences() {
  const query = groq`*[_type == "experience"] | order(order asc) {
    title,
    company,
    period,
    description,
    skills,
    type,
    order
  }`

  return await client.fetch(query)
}

// Toolkit Data
export async function getToolkit() {
  const query = groq`*[_type == "toolkit"] | order(category asc) {
    category,
    tools
  }`

  return await client.fetch(query)
}

export async function getProjects(): Promise<Project[]> {
  try {
    const query = groq`*[_type == "project"]{
      title,
      overview,
      githubLink,
      demoLink,
      _id,
      skills,
      "image": image,
      category,
      status,
      slug
    }`;

    const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
    return data?.sort((a: Project, b: Project) => {
      if (a.category === 'featured' && b.category !== 'featured') return -1;
      if (a.category !== 'featured' && b.category === 'featured') return 1;
      return (a.title || '').localeCompare(b.title || '');
    }) || [];
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  try {
    const query = groq`*[_type == "project" && slug.current == $slug][0]{
                title,
                overview,
                description,
                githubLink,
                demoLink,
                _id,
                skills,
                "image": image,
                category,
                status,
                slug
            }`;

    const project = await client.fetch(query, { slug });
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}