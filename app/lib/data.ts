import { groq } from 'next-sanity'
import { client } from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
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