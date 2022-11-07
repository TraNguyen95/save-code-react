export const convertParamsToObject = (params: any) => {
    return Object.fromEntries(new URLSearchParams(params));
};
