import { Address } from "@think-zambia-foundation/api"

export const formatAddressCityPostalCodeProvince = (address?: Address): string => {
  let addressString = `${address?.city ?? ""}, `
  if (address?.postalCode) {
    addressString += `${address.postalCode}, `
  }
  if (address?.province) {
    addressString += `${address.province}, `
  }
  return addressString.slice(0, -2)
}

