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
      specialty,
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
      addressState:
        typeof addressState === "string" ? addressState : addressState.id,
      addressMunicipality:
        typeof addressMunicipality === "string"
          ? addressMunicipality
          : addressMunicipality.id,
      street: address,
      city: addressCity,
      specialty: specialty.name,
    };
  });
}

//To annual convention preparation component
export function teachersDataToTeachersTableAnnualConventionMapper(
  teachersData
) {
  return teachersData.map((teacher) => {
    const { id, firstName, lastName, email, phone, annualPreparationStatus } =
      teacher;

    return {
      id,
      name: firstName,
      lastName,
      email,
      status: annualPreparationStatus,
      phone,
    };
  });
}
