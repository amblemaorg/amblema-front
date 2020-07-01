export function profileDataToSponsorFormMapper(sponsorData) {
  const {
    id,
    userType,
    name,
    companyRif,
    companyType,
    companyOtherType,
    companyPhone,
    contactFirstName,
    contactLastName,
    contactEmail,
    contactPhone,
    image,
    email,
    addressState,
    addressMunicipality,
    addressCity,
    address
  } = sponsorData;

  return {
    id,
    userType,
    letter: name,
    rif: companyRif,
    phone: companyPhone,
    email: email,
    tipoEmpresa: companyType,
    companyOtherType: companyOtherType,
    letterName: contactFirstName,
    letterLastName: contactLastName,
    phoneContact: contactPhone,
    emailContact: contactEmail,
    addressState: addressState.id,
    addressMunicipality: addressMunicipality.id,
    city: addressCity,
    street: address
  };
}
export function profileDataToCordinatorFormMapper(coordinatorData) {
  const {
    id,
    userType,
    firstName,
    lastName,
    cardType,
    cardId,
    phone,
    birthdate,
    gender,
    homePhone,
    addressHome,
    profession,
    image,
    email,
    addressState,
    addressMunicipality,
    addressCity,
    address
  } = coordinatorData;

  return {
    id,
    userType,
    letter: firstName,
    lastNameLetter: lastName,
    documentGroup: {
      prependSelect: cardType,
      prependInput: cardId
    },
    email: email,
    phoneMovil: phone,
    phone: homePhone,
    date: birthdate,
    sexo: gender,
    addressState: addressState.id,
    addressMunicipality: addressMunicipality.id,
    city: addressCity,
    street: address,
    house: addressHome,
    proffesion: profession
  };
}

export function profileDataToSchoolFormMapper(schoolData) {
  const {
    id,
    userType,
    code,
    name,
    image,
    addressZoneType,
    addressZone,
    schoolType,
    principalFirstName,
    principalLastName,
    principalEmail,
    principalPhone,
    subPrincipalFirstName,
    subPrincipalLastName,
    subPrincipalEmail,
    subPrincipalPhone,
    schoolShift,
    email,
    phone,
    addressState,
    addressMunicipality,
    addressCity,
    address
  } = schoolData;

  return {
    id,
    userType,
    name,
    code,
    email: email,
    phone: phone,
    addressState: addressState.id,
    addressMunicipality: addressMunicipality.id,
    city: addressCity,
    street: address,
    zone: addressZoneType,
    address: addressZone,
    turno: schoolShift,
    typeEscuela: schoolType,
    letterName: principalFirstName,
    letterLastName: principalLastName,
    phoneContact: principalPhone,
    emailContact: principalEmail,
    letterName2: subPrincipalFirstName,
    letterLastName2: subPrincipalLastName,
    phoneContact2: subPrincipalPhone,
    emailContact2: subPrincipalEmail
  };
}
