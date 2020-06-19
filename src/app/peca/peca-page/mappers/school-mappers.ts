export function schoolDataToSchoolFormMapper(schoolData) {
  const {
    id,
    name,
    code,
    addressState,
    addressMunicipality,
    address,
    addressCity,
    principalFirstName,
    principalLastName,
    principalPhone,
    principalEmail,
    subPrincipalFirstName,
    subPrincipalLastName,
    subPrincipalPhone,
    subPrincipalEmail,
    nTeachers,
    nAdministrativeStaff,
    nLaborStaff,
    nStudents,
    nGrades,
    facebook,
    instagram,
    twitter,
  } = schoolData;

  const principalName =
    principalFirstName && principalLastName ? `${principalFirstName} ${principalLastName}` : null;

  const subPrincipalName =
    subPrincipalFirstName && subPrincipalLastName
      ? `${subPrincipalFirstName} ${subPrincipalLastName}`
      : null;

  return {
    id,
    nameEscuela: name,
    codigoEscuela: code,
    phoneEscuela: null,
    addressState: addressState.id,
    addressMunicipality: addressMunicipality.id,
    callesEscuela: address,
    ciudadEscuela: addressCity,
    nameDirector: principalName,
    phoneDirector: principalPhone,
    emailDirector: principalEmail,
    nameSubDirector: subPrincipalName,
    phoneSubDirector: subPrincipalPhone,
    emailSubDirector: subPrincipalEmail,
    number1: `${nTeachers}`,
    number2: `${nAdministrativeStaff}`,
    number3: `${nLaborStaff}`,
    number4: `${nStudents}`,
    number5: `${nGrades}`,
    facebook,
    instagram,
    twitter,
  };
}
