const { navigate } = require('@ethereum-navigator/navigator');

(async () => {

    const json = true
    const rpcUrl = process.argv[2]

    const network = await navigate({
        rpcUrl
    })

    if (json) {
        console.log(JSON.stringify(network, null, 2))
    } else {

        if (network.name) {
            console.log(`Connected to the '${network.name}' network of '${network.project}'.`)
        } else {
            console.log(`Network with id: ${network.networkId} is not in the atlas!`)
        }
    }
})()
