export function schoolPicturesSliderDataToSchoolPicturesTableMapper(sliderData) {
    return sliderData.map((slide) => {
        const {
            id,
            description,
            image,
        } = slide;

        return {
            id,
            // image,
            description,
            source: image,
            imageSelected: null,
        };
    });
}
