import {createClient} from '@sanity/client'

const client = createClient({
    projectId: "n1oqg738",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-13"
})

export default client