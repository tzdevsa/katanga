'use server'

export const getGeometry = async () => {
  return await fetch(`${process.env.PLACES_API}?place_Id=${process.env.PLACES_ID}`)
    .then(async (res) => {
      const data = await res?.json()
      return data?.result?.geometry;
    })
    .catch(() => {
      return {}
    })
}
