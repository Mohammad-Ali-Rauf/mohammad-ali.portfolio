import { createClient } from "next-sanity";

const projectId = "ihdrh6np"
const dataset = "production"
const apiVersion = "2025-10-07"

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})