"use server";

import { Staff } from "@think-zambia-foundation/api";

export const getStaffById = async (staffId: string, organisationId: string) => {
  try {
    const options = {
      // Option to revalidate the data stored in cache
      next: { revalidate: 3600 },
      headers: new Headers({
        "x-api-key": `${process.env.TZ_API_KEY}`,
      }),
    };

    return await fetch(
      `${process.env.CORE_API}/organisation/${organisationId}/staff/${staffId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => response.data)
      .then((data: Staff) => data ?? null);
  } catch (error) {
    console.error(error);
    return null;
  }
};
