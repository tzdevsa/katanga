"use server";

import { Environment } from "@think-zambia-foundation/api";

export const getOrganisation = async (organisationId: string) => {
  try {
    const options = {
      headers: new Headers({
        "x-api-key": `${process.env.TZ_API_KEY}`,
      }),
    };

    const res = await fetch(
      `${process.env.CORE_API}/organisation/${organisationId}`,
      options
    );
    const json = await res.json();
    return json?.data as Environment;
  } catch (error) {
    console.error(error);
    return null;
  }
};
