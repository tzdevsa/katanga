"use server";

import { Service } from "@think-zambia-foundation/api";

export const getServices = async (organisationId: string) => {
  try {
    const options = {
      // Option to revalidate the data stored in cache
      next: { revalidate: 3600 },
      headers: new Headers({
        "x-api-key": `${process.env.TZ_API_KEY}`,
      }),
    };
    const res = await fetch(
      `${process.env.CORE_API}/organisation/${organisationId}/services`,
      options
    );
    const json = await res.json();
    const services = (json?.data as Service[]) ?? [];
    services.sort((a, b) => {
      const orderA = a.orderId ?? 0; // Use nullish coalescing to handle null as 0
      const orderB = b.orderId ?? 0;
      return orderA - orderB;
    });

    return services;
  } catch (error) {
    console.error(error);
    return [];
  }
};
