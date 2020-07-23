export function amblemonedasTableMapper(amblemonedaData) {
    return amblemonedaData.map( section => {
        const {
            id,
            name,
            grade,
            status,
        } = section;
    
        return {
            id,
            grade,
            section: name,
            confirmation: status,
    
        };
    });    
}
