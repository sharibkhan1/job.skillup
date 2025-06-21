import Stack from "../contentstack-sdk";

export const getHeaderRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "gynnavbar",
        referenceFieldPath: undefined,
        jsonRtePath: undefined,
    });
    return response[0][0];
};

export const getMainRes = async () => {
    const response = await Stack.getEntry({
        contentTypeUid: "gynmain",
        referenceFieldPath: undefined,
        jsonRtePath: ["block.title"], // make sure this supports the RTE fields for all blocks
    });
    return response[0][0];
};
