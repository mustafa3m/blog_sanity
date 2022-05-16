import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

/* documents */
import post from './documents/post.js'
import author from "./documents/author.js";
import category from "./documents/category.js";

/* types */
import imageCaption from './types/imageCaption.js'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		post,
		author,
		category,
		imageCaption,	
	]),
})
