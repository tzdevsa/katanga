export default async function getOrganisationId(searchParams: Promise<{ [key: string]: string | string[] | undefined }>) {
  const search = await searchParams;
  if (search) {
    return search['organisation-id'];
  }
}
