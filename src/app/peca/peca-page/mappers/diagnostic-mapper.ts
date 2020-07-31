export function diagnosticDataToReadingFormMapper(
  diagnosticReadingData,
  numberLapse
) {
  return diagnosticReadingData.map((student) => {
    //console.log("mapp", student[`lapse${numberLapse}`])
    // if (student[`lapse${numberLapse}`])
    const { wordsPerMin, wordsPerMinIndex, readingDate } = student[
      `lapse${numberLapse}`
    ]
      ? student[`lapse${numberLapse}`]
      : { wordsPerMin: null, wordsPerMinIndex: null, readingDate: null }; //student[`lapse${numberLapse}`].readingDate ? student[`lapse${numberLapse}`].readingDate : null;
    const {
      id,
      firstName,
      lastName,
      gender,
      grade,
      section: { name, idSection },
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
      //index: (Math.round(wordsPerMinIndex * 100) / 100).toFixed(2),
      sectionId: idSection,
    };
  });
}

export function diagnosticDataToMathFormMapper(
  diagnosticMathData,
  numberLapse
) {
  return diagnosticMathData.map((student) => {
    const {
      logicDate,
      multiplicationsPerMin,
      operationsPerMin,
      multiplicationsPerMinIndex,
      operationsPerMinIndex,
      mathDate,
    } = student[`lapse${numberLapse}`]
      ? student[`lapse${numberLapse}`]
      : {
          logicDate: null,
          multiplicationsPerMin: null,
          mathDate: null,
          operationsPerMin: null,
          multiplicationsPerMinIndex: null,
          operationsPerMinIndex: null,
        }; //student[`lapse${numberLapse}`].readingDate ? student[`lapse${numberLapse}`].readingDate : null;
    const {
      id,
      firstName,
      lastName,
      gender,
      grade,
      section: { name, idSection },
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
      sectionId: idSection,
    };
  });
}
