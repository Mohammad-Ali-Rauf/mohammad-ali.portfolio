import { createClient } from "next-sanity";

const projectId = "ihdrh6np"
const dataset = "production"
const apiVersion = "v2023-06-15"

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})