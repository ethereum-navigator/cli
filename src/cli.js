const {navigate} = require('@ethereum-navigator/navigator');
const {argv} = require('yargs');

(async () => {

    const json = argv.json;
    const rpcUrl = argv._[0];

    if (!rpcUrl) {
        throw new Error('Please supply a valid rpc url!');
    }

    let network = await navigate({
        rpcUrl
    })
        .catch(() => {
            // something was not cool with the network
        });

    if (json) {
        console.log(
            JSON.stringify(network ? network : {}, null, 2)
        )
    } else {

        if (!network) {
            console.log('Unable to connect to the network!')
        } else if (network.name) {
            console.log(
                `Connected to the '${network.name}' network of '${network.project}'.`
            )
        } else {
            console.log(
                `Network with id: ${network.networkId} is not in the atlas!`
            )
        }
    }
})();
