export function diagnosticDataToReadingFormMapperLapse1(diagnosticReadingData) {
  return diagnosticReadingData.map((student) => {
    const {
      id,
      firstName,
      lastName,
      gender,
      grade,
      section: { name },
      lapse1: { readingDate, wordsPerMin, wordsPerMinIndex },
    } = student;

    return {
      id,
      name: firstName,
      lastName,
      gender,
      grade,
      section: name,
      date: readingDate,
      result: wordsPerMin,
      index: wordsPerMinIndex,
    };
  });
}

export function diagnosticDataToReadingFormMapperLapse2(diagnosticReadingData) {
  return diagnosticReadingData.map((student) => {
    const {
      id,
      firstName,
      lastName,
      gender,
      grade,
      section: { name },
      lapse2: { readingDate, wordsPerMin, wordsPerMinIndex },
    } = student;

    return {
      id,
      name: firstName,
      lastName,
      gender,
      grade,
      section: name,
      date: readingDate,
      result: wordsPerMin,
      index: wordsPerMinIndex,
    };
  });
}

export function diagnosticDataToReadingFormMapperLapse3(diagnosticReadingData) {
  return diagnosticReadingData.map((student) => {
    const {
      id,
      firstName,
      lastName,
      gender,
      grade,
      section: { name },
      lapse3: { readingDate, wordsPerMin, wordsPerMinIndex },
    } = student;

    return {
      id,
      name: firstName,
      lastName,
      gender,
      grade,
      section: name,
      date: readingDate,
      result: wordsPerMin,
      index: wordsPerMinIndex,
    };
  });
}

export function diagnosticDataToMathFormMapperLapse1(diagnosticMathData) {
  return diagnosticMathData.map((student) => {
    const {
      id,
      firstName,
      lastName,
      gender,
      grade,
      section: { name },
      lapse1: {
        mathDate,
        logicDate,
        multiplicationsPerMin,
        operationsPerMin,
        multiplicationsPerMinIndex,
        operationsPerMinIndex,
      },
    } = student;

    return {
      id,
      name: firstName,
      lastName,
      gender,
      grade,
      section: name,
      date: mathDate,
      dateLog: logicDate,
      resultMul: multiplicationsPerMin,
      resultLog: operationsPerMin,
      indexMul: multiplicationsPerMinIndex,
      indexLog: operationsPerMinIndex,
    };
  });
}
export function diagnosticDataToMathFormMapperLapse2(diagnosticMathData) {
  return diagnosticMathData.map((student) => {
    const {
      id,
      firstName,
      lastName,
      gender,
      grade,
      section: { name },
      lapse2: {
        mathDate,
        logicDate,
        multiplicationsPerMin,
        operationsPerMin,
        multiplicationsPerMinIndex,
        operationsPerMinIndex,
      },
    } = student;

    return {
      id,
      name: firstName,
      lastName,
      gender,
      grade,
      section: name,
      date: mathDate,
      dateLog: logicDate,
      resultMul: multiplicationsPerMin,
      resultLog: operationsPerMin,
      indexMul: multiplicationsPerMinIndex,
      indexLog: operationsPerMinIndex,
    };
  });
}
export function diagnosticDataToMathFormMapperLapse3(diagnosticMathData) {
  return diagnosticMathData.map((student) => {
    const {
      id,
      firstName,
      lastName,
      gender,
      grade,
      section: { name },
      lapse3: {
        mathDate,
        logicDate,
        multiplicationsPerMin,
        operationsPerMin,
        multiplicationsPerMinIndex,
        operationsPerMinIndex,
      },
    } = student;

    return {
      id,
      name: firstName,
      lastName,
      gender,
      grade,
      section: name,
      date: mathDate,
      dateLog: logicDate,
      resultMul: multiplicationsPerMin,
      resultLog: operationsPerMin,
      indexMul: multiplicationsPerMinIndex,
      indexLog: operationsPerMinIndex,
    };
  });
}

