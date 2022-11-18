module.exports = {
    apps: [
        {
            name: "Wabis",
            exec_mode: "cluster",
            instances: "max",
            script: "./.output/server/index.mjs"
        }
    ]
};
