
'use server'

export interface CreateApplicationProps {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  enrollmentGradeId: string;
  email: string,
  phone1: string;
  phone2?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  province?: string;
  country: string;
  postalCode?: string;
  previousSchool?: string;
  religion?: string;
  schoolId: string;
}

export const createApplication = async (args: CreateApplicationProps) => {
  try {
    const options: RequestInit = {
      headers: new Headers({
        "x-api-key": `${process.env.TZ_API_KEY}`,
      }),
      method: "POST",
      body: JSON.stringify(args),
    };

    const res = await fetch(
      `${process.env.KATANGA_API}/schools/${args.schoolId}/createApplication`,
      options
    );
    const json = await res.json();
    return json?.data as string;
  } catch (error) {
    console.error(error);
    return null;
  }
}