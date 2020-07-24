export function schoolDataToSchoolFormMapper(schoolData) {
  const schoolData_ = schoolData.isInApproval && schoolData.approvalHistory.length > 0 
  ? {
    ...schoolData,
    ...schoolData.approvalHistory[schoolData.approvalHistory.length - 1].detail
  }
  : { ...schoolData };

  const {
    id,
    pecaId,
    isInApproval,
    name,
    code,
    phone,
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
  } = schoolData_;

  return {
    id,
    pecaId,
    isInApproval,
    nameEscuela: name,
    codigoEscuela: code,
    phoneEscuela: phone,
    addressState: typeof addressState === "string" ? addressState : addressState.id,
    addressMunicipality: typeof addressMunicipality === "string" ? addressMunicipality : addressMunicipality.id,
    callesEscuela: address,
    ciudadEscuela: addressCity,
    // nameDirector: principalName,
    namesDirector : {
      nameDirector: principalFirstName,
      lastnameDirector: principalLastName,
    },
    phoneDirector: principalPhone,
    emailDirector: principalEmail,
    // nameSubDirector: subPrincipalName,
    namesSubDirector : {
      nameSubDirector: subPrincipalFirstName,
      lastnameSubDirector: subPrincipalLastName,
    },
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
