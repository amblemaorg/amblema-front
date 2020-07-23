export function teacherTestimonyMapper(teacherTestimonyData) {
    return teacherTestimonyData.map((testimonials) => {
        const {
            id,
            firstName,
            lastName,
            image,
            position,
            description,
        } = testimonials;

        return {
            id,
            name: firstName,
            lastName,
            cargo: position,
            description,
            image,
        };
    });
}