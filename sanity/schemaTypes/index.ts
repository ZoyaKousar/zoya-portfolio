import { type SchemaTypeDefinition } from 'sanity'
import services from '../schemas/services'
import blissWithZoya from '../schemas/blissWithZoya'
import homePage from '../schemas/homePage'
import ContactForm from '../schemas/contactForm'
import review from '../schemas/review'
import blog from '../schemas/blog'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage,services, blissWithZoya, ContactForm, review, blog],
}
