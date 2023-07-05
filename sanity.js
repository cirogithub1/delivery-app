import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
	projectId: 'qwoxusny',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2021-10-21',
})

const Builder = imageUrlBuilder(client)
export const urlfor = (source) => Builder.image(source)

export default client