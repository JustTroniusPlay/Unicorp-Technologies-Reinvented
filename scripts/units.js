const surge = extend(UnitType, "surge", {});
surge.constructor = () => extend(UnitEntity, {});

const blaze = extendContent(UnitType, "blaze", {});
blaze.constructor = () => extend(UnitEntity, {});

const razor = extendContent(UnitType, "razor", {});
razor.constructor = () => extend(UnitEntity, {});

const aegis = extendContent(UnitType, "aegis", {});
aegis.constructor = () => extend(UnitEntity, {});

const enforcer = extendContent(UnitType, "enforcer", {});
enforcer.constructor = () => extend(UnitEntity, {});
enforcer.defaultController = () => extend(BuilderAI, {});

const ambassador = extendContent(UnitType, "ambassador", {});
ambassador.constructor = () => extend(UnitEntity, {});
ambassador.defaultController = () => extend(MinerAI, {});

const backwater = extendContent(UnitType, "backwater", {});
backwater.constructor = () => extend(UnitEntity, {});
backwater.defaultController = () => extend(MinerAI, {});

const scarab = extendContent(UnitType, "scarab", {});
scarab.constructor = () => extend(UnitEntity, {});
scarab.defaultController = () => extend(MinerAI, {});