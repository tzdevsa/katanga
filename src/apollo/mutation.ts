'use client'

import { CREATE_APPLICATION } from "@think-zambia-foundation/api";
import { katangaApiClient } from "./clients";

export interface CreateApplicationProps {
  appEnvId: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  enrollmentGradeId: string;
  phone1: string;
  phone2?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  postalCode?: string;
  previousSchool?: string;
  religion?: string;
  schoolId: string;
}

export function createApplication(variables: CreateApplicationProps) {
  return katangaApiClient.mutate({
    mutation: CREATE_APPLICATION,
    variables
  });
}