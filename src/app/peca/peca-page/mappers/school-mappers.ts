export function schoolDataToSchoolFormMapper(schoolData) {
  const {
    id,
    pecaId,
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
    pecaId,
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
    doubleFields1: {
      number1: nTeachers,
      number2: nAdministrativeStaff,
    },
    doubleFields2: {
      number3: nLaborStaff,
      number4: nStudents,
    },
    doubleFields3: {
      number5: nGrades,
      facebook,
    },
    doubleFields4: {
      instagram,
      twitter,
    },
  };
}
