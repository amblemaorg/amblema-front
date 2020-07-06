export function diagnosticDataToReadingFormMapper(diagnosticReadingData) {
  const {
    id,
    firstName,
    lastName,
    gender,
    grade,
    section,
    readingDate,
    wordsPerMin,
    wordsPerMinIndex
  } = diagnosticReadingData;

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
}

export function diagnosticDataToMathFormMapper(diagnosticMathData) {
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
    operationsPerMinIndex
  } = diagnosticMathData;

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
    indexLog: operationsPerMinIndex
  };
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
