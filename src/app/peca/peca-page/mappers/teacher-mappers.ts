export function teachersDataToTeachersTableMapper(teachersData) {
  return teachersData.map((teacher) => {
    const {
      id,
      firstName,
      lastName,
      cardId,
      cardType,
      gender,
      email,
      phone,
      addressState,
      addressMunicipality,
      address,
      addressCity,
      status,
      annualPreparationStatus,
    } = teacher;

    return {
      id,
      name: firstName,
      lastName,
      gender,
      email,
      status,
      documentGroup: {
        prependSelect: cardType,
        prependInput: cardId,
      },
      phone,
      addressState: addressState.id,
     addressMunicipality: addressMunicipality.id,
      street: address,
      city: addressCity,
    };
  });
}


//To annual convention preparation component
export function teachersDataToTeachersTableAnnualConventionMapper(teachersData) {
  return teachersData.map((teacher) => {
    const {
      id,
      firstName,
      lastName,
      cardId,
      cardType,
      gender,
      email,
      phone,
      address,
      addressCity,
      status,
      pecaId
    } = teacher;

    return {
      id: pecaId,
      name: firstName,
      lastName,
      gender,
      email,
      status,
      documentGroup: {
        prependSelect: cardType,
        prependInput: cardId,
      },
      phone,
      street: address,
      city: addressCity,
    };
  });
}