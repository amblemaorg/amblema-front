export function specialActivityTableMapper(specialData) {
    return specialData.map( itemsActivities => {
        const {
            name,
            tax,
            description,
            quantity,
            unitPrice,
            subtotal
        } = itemsActivities;

        return {
            item: name,
            impuesto: tax,
            description,
            cantidad: quantity,
            price: unitPrice,
            subtotal
        };
    });
}