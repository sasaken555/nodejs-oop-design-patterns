const Config = require("./config-sample");
const strategies = require("./strategy-sample");

const jsonConfig = new Config(strategies.json);
jsonConfig.read("conf.json");
jsonConfig.set("book.nodejs", "design-patterns");
jsonConfig.save("conf-mod.json");

const yamlConfig = new Config(strategies.yaml);
yamlConfig.read("conf.yaml");
yamlConfig.set("book.nodejs", "design-patterns");
yamlConfig.save("conf-mod.yaml");

// inStrategy: JSON, outStrategy: YAML
const mixedConfig = new Config(strategies.json, strategies.yaml);
mixedConfig.read("conf-for-mixed.json");
mixedConfig.set("book.nodejs", "design-patterns");
mixedConfig.save("conf-for-mixed-mod.yaml");
