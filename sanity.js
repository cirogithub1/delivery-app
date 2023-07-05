import { createClient } from '@sanity/client'
// import {useClient} from 'sanity'
import imageUrlBuilder from '@sanity/image-url'

// const client = useClient({
// 	apiVersion: '2021-10-21',
// 	projectId: 'qwoxusny',
// 	dataset: 'production',
// 	useCdn: true
// })

const client = createClient({
	projectId: 'qwoxusny',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2021-10-21'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client