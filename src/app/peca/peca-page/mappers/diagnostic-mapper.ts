export function diagnosticDataToReadingFormMapper(diagnosticReadingData) {
  return diagnosticReadingData.map((student) => {
    const {
    id,
    firstName,
    lastName,
    gender,
    grade,
    section,
    lapse1: {
    readingDate,
    wordsPerMin,
    wordsPerMinIndex
    }
  } = student;

  return {
    id,
    name: firstName,
    lastName,
    gender,
    grade,
    section,
    date: readingDate,
    result: wordsPerMin,
    index: wordsPerMinIndex
  };
})
}

export function diagnosticDataToMathFormMapper(diagnosticMathData) {
  return diagnosticMathData.map((student) => {
  const {
    id,
    firstName,
    lastName,
    gender,
    grade,
    section,
    lapse1: {
    mathDate,
    logicDate,
    multiplicationsPerMin,
    operationsPerMin,
    multiplicationsPerMinIndex,
    operationsPerMinIndex
    }
  } = student;

  return {
    id,
    name: firstName,
    lastName,
    gender,
    grade,
    section,
    date: mathDate,
    dateLog: logicDate,
    resultMul: multiplicationsPerMin,
    resultLog: operationsPerMin,
    indexMul: multiplicationsPerMinIndex,
    indexLog: operationsPerMinIndex
  };
})
}
/*
export function diagnosticDataToMathFormMapper(diagnosticData) {
  const {
    id,
    firstName,
    lastName,
    gender,
    grade,
    section,
    mathDate,
    logicDate,
    multiplicationsPerMin,
    operationsPerMin,
    multiplicationsPerMinIndex,
    operationsPerMinIndex,
     readingDate,
    wordsPerMin,
    wordsPerMinIndex
  } = diagnosticData;

  return {
    id,
    name: firstName,
    lastName,
    gender,
    grade,
    section,
    date: mathDate,
    resultMul: multiplicationsPerMin,
    resultLog: operationsPerMin,
    indexMul: multiplicationsPerMinIndex,
    indexLog: operationsPerMinIndex,
     date: readingDate,
    result: wordsPerMin,
    index: wordsPerMinIndex
  };
}
*/
