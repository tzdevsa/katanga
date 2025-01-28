'use server'

export const getReviews = async () => {
  return await fetch(`${process.env.PLACES_API}?place_Id=${process.env.PLACES_ID}`)
    .then(async (res) => {
      const data = await res?.json()
      return data?.result?.reviews;
    })
    .catch(() => {
      return []
    })
}
