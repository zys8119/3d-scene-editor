const getName = (layer: { name: string; id: any }) => {
    return `${$data.provideConfig().layerBaseName}-${layer.id}-${layer.name}`;
};
export default getName;
