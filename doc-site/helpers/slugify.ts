import slugifyBase from 'slugify';

function slugify(input: string) {
  return slugifyBase(input, { lower: true, strict: true });
}

export default slugify;
