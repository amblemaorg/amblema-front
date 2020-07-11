export function amblemonedasTableMapper(amblemonedaData) {
    const {
        id,
        name,
        grade,
        status,
    } = amblemonedaData;

    return {
        id,
        grade,
        section: name,
        confirmation: status,

    };
}
