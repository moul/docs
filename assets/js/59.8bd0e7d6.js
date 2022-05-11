(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{501:function(e,a,s){"use strict";s.r(a);var t=s(8),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"membrane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#membrane"}},[e._v("#")]),e._v(" Membrane")]),e._v(" "),s("h2",{attrs:{id:"what-is-membrane"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-membrane"}},[e._v("#")]),e._v(" What is membrane?")]),e._v(" "),s("p",[e._v("Membrane uses the Protostar SDK (more on this below) to build a development toolset that specializes in developing CosmWasm on Osmosis. We optimize for deeper integration with Osmosis to facilitate building the best dapps that really augment Osmosis.")]),e._v(" "),s("p",[e._v("CosmWasm is a multi-chain smart contract platform for the Cosmos ecosystem. While being powerful as it is, a lot of things need to be wired manually when developing CosmWasm contracts and dapps. To provide seamless CosmWasm development experience, Protostar is designed to be a swiss-army knife for building custom dev tools for CosmWasm on each specific blockchain.")]),e._v(" "),s("p",[e._v("Membrane includes CosmWasm deployment pipeline automation. It has support for:")]),e._v(" "),s("ul",[s("li",[e._v("build / test / deploy / migration")]),e._v(" "),s("li",[e._v("workspace support")]),e._v(" "),s("li",[e._v("fast integration test support")]),e._v(" "),s("li",[e._v("fuzzing support")])]),e._v(" "),s("h2",{attrs:{id:"dependency-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependency-installation"}},[e._v("#")]),e._v(" Dependency installation")]),e._v(" "),s("h3",{attrs:{id:"localosmosis-download"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localosmosis-download"}},[e._v("#")]),e._v(" LocalOsmosis download")]),e._v(" "),s("p",[e._v("Clone the LocalOsmosis repo.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/terra-money/LocalOsmosis.git\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Navigate to the newly created LocalOsmosis directory.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" LocalTerra\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Spin up an instance of the environment with docker-compose.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("docker-compose up\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"rust-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rust-setup"}},[e._v("#")]),e._v(" Rust setup")]),e._v(" "),s("p",[e._v("While WASM smart contracts can be written in any programming language, it is strongly recommended that you utilize Rust, as it is the only language for which mature libraries and tooling exist for CosmWasm.")]),e._v(" "),s("p",[e._v("Set the default release channel used to update Rust to stable:")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("rustup default stable\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Add wasm as the compilation target:")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("rustup target "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" wasm32-unknown-unknown\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Install the necessary dependencies for generating contracts:")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("cargo "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" cargo-generate --features vendored-openssl\ncargo "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" cargo-run-script\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"node-js-npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js-npm"}},[e._v("#")]),e._v(" Node JS & NPM")]),e._v(" "),s("p",[e._v("To run Terrain, you will need to install Node.js and NPM. We recommend that you install "),s("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js v16"),s("OutboundLink")],1),e._v(". Node Package Manager (NPM) is automatically installed along with your Node.js download.")]),e._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),s("p",[e._v("After you have installed the dependencies, proceed with the following")]),e._v(" "),s("p",[e._v("Installs membrane globally.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g @osmosis-labs/membrane\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Scaffolds a new dApp")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("membrane new my-osmo-dapp\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" my-osmo-dapp\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Installs all dependencies for dApp.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"running-contract-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-contract-functions"}},[e._v("#")]),e._v(" Running Contract Functions")]),e._v(" "),s("p",[e._v("Once you have successfully deployed your project, you can interact with the deployed contract and the underlying blockchain by utilizing functions defined in the "),s("code",[e._v("lib/index.js")]),e._v(" file. You may also create your own abstractions in this file for querying or executing transactions. The default contents of the "),s("code",[e._v("lib/index.js")]),e._v(" file are presented below:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// lib/index.js\n\nmodule.exports = ({ wallets, refs, config, client }) => ({\n  getCount: () => client.query("counter", { get_count: {} }),\n  increment: (signer = wallets.test1) =>\n    client.execute(signer, "counter", { increment: {} }),\n});\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("You can call the functions defined above inside of the "),s("code",[e._v("membrane")]),e._v(" console. An example of this using the counter contract is shown below.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("membrane console\nmembrane > await lib.getCount()\n{ count: 0 }\nmembrane > await lib.increment()\nmembrane > await lib.getCount()\n{ count: 1 }\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("You can also specify which network you would like to interact with by utilizing the --network flag.")]),e._v(" "),s("p",[s("code",[e._v("membrane console --network NETWORK")])]),e._v(" "),s("h2",{attrs:{id:"creating-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-tasks"}},[e._v("#")]),e._v(" Creating Tasks")]),e._v(" "),s("p",[e._v("You can also utilize the functions available inside of the "),s("code",[e._v("lib/index.js")]),e._v(" file to create tasks. Tasks are utilized in order to automate the execution of sequential functions or commands. An example task is provided for you in the "),s("code",[e._v("tasks/example-with-lib.js")]),e._v(" file in your project directory.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('const { task } = require("@osmosis-labs/membrane");\nconst lib = require("../lib");\n\ntask(async (env) => {\n  const { getCount, increment } = lib(env);\n  console.log("count 1 = ", await getCount());\n  await increment();\n  console.log("count 2 = ", await getCount());\n});\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("To run the example task shown above, which is located in the "),s("code",[e._v("tasks/example-with-lib.js")]),e._v(" file, run the following command in the terminal.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("membrane task:run example-with-lib\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("In order to create a new task, run the following command, replacing "),s("code",[e._v("<task-name>")]),e._v(" with the desired name for your new task.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("membrane task:new "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("task-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("If you would like to utilize JavaScript in your functions or tasks, you can import Osmo.js. The "),s("code",[e._v("tasks/example-custom-logic.js")]),e._v(" file contains an example of a task that utilizes Osmo.js functionality.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// tasks/example-custom-logic.js\n\nconst { task, terrajs } = require("@osmois-labs/membrane");\n\ntask(async ({ wallets, refs, config, client }) => {\n  console.log("creating new key");\n  const key = osmojs.MnemonicKey();\n  console.log("private key", key.privateKey.toString("base64"));\n  console.log("mnemonic", key.mnemonic);\n});\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h2",{attrs:{id:"migrating-contracts-on-osmo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrating-contracts-on-osmo"}},[e._v("#")]),e._v(" Migrating contracts on Osmo")]),e._v(" "),s("p",[e._v("On Osmosis, it is possible to initilize contracts as migratable. A migratable contract allows an adminstrator to upload a new version of a contract and then send a migrate message to move to the new code.")]),e._v(" "),s("h3",{attrs:{id:"adding-migratemsg-to-the-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-migratemsg-to-the-contract"}},[e._v("#")]),e._v(" Adding MigrateMsg to the contract")]),e._v(" "),s("p",[e._v("In order for a contract to be migratable, it must satisfy the following two requirements:")]),e._v(" "),s("ul",[s("li",[e._v("The smart contract handles the MigrateMsg transaction.")]),e._v(" "),s("li",[e._v("The smart contract has an admininstrator set.")])]),e._v(" "),s("p",[e._v("To implement support for MigrateMsg, add the message to the "),s("code",[e._v("msg.rs")]),e._v(" file. To do so, navigate to "),s("code",[e._v("msg.rs")]),e._v(" and place the following code just above the "),s("code",[e._v("InstantiateMsg")]),e._v(" struct.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct MigrateMsg {}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("With "),s("code",[e._v("MigrateMsg")]),e._v(" defined, update the "),s("code",[e._v("contract.rs")]),e._v(" file. First, update the import from "),s("code",[e._v("crate::msg")]),e._v(" to include MigrateMsg.")]),e._v(" "),s("p",[s("code",[e._v("use crate::msg::{CountResponse, ExecuteMsg, InstantiateMsg, QueryMsg, MigrateMsg};")])]),e._v(" "),s("p",[e._v("Next, add the following method above "),s("code",[e._v("instantiate")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('#[cfg_attr(not(feature = "library"), entry_point)]\npub fn migrate(_deps: DepsMut, _env: Env, _msg: MigrateMsg) -> StdResult<Response> {\n    Ok(Response::default())\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"migrating-the-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrating-the-contract"}},[e._v("#")]),e._v(" Migrating the Contract")]),e._v(" "),s("p",[e._v("We already deployed our contract, but didn't initialize it as migratable yet.")]),e._v(" "),s("p",[e._v("To do so, after adding "),s("code",[e._v("MigrateMsg")]),e._v(" to the smart contract, we can redeploy the contract and add the "),s("code",[e._v("--set-signer-as-admin")]),e._v(" flag. This allows the transaction signer to migrate the contract in the future.")]),e._v(" "),s("p",[s("code",[e._v("membrane deploy counter --signer test1 --set-signer-as-admin")])]),e._v(" "),s("p",[e._v("If you decide to make changes to the deployed contract, you can migrate to the updated code by executing the following command.")]),e._v(" "),s("p",[s("code",[e._v("membrane contract:migrate counter --signer test1")])]),e._v(" "),s("h2",{attrs:{id:"membrane-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#membrane-commands"}},[e._v("#")]),e._v(" Membrane Commands")]),e._v(" "),s("ul",[s("li",[e._v("membrane code:new NAME")]),e._v(" "),s("li",[e._v("membrane code:store CONTRACT")]),e._v(" "),s("li",[e._v("membrane console")]),e._v(" "),s("li",[e._v("membrane contract:instantiate CONTRACT")]),e._v(" "),s("li",[e._v("membrane contract:migrate [CONTRACT]")]),e._v(" "),s("li",[e._v("membrane contract:updateAdmin CONTRACT ADMIN")]),e._v(" "),s("li",[e._v("membrane deploy CONTRACT")]),e._v(" "),s("li",[e._v("membrane help [COMMAND]")]),e._v(" "),s("li",[e._v("membrane new NAME")]),e._v(" "),s("li",[e._v("membrane sync-refs [FILE]")]),e._v(" "),s("li",[e._v("membrane task:new [TASK]")]),e._v(" "),s("li",[e._v("membrane task:run [TASK]")]),e._v(" "),s("li",[e._v("membrane test CONTRACT-NAME")]),e._v(" "),s("li",[e._v("membrane wallet:new")])]),e._v(" "),s("h3",{attrs:{id:"membrane-code-new-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#membrane-code-new-name"}},[e._v("#")]),e._v(" membrane code:new NAME")]),e._v(" "),s("p",[e._v("Generate new contract.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("USAGE\n  $ terrain code:new [NAME] [--path <value>] [--version <value>]\n\nFLAGS\n  --path=<value>     [default: ./contracts] path to keep the contracts\n  --version=<value>  [default: 0.16]\n\nDESCRIPTION\n  Generate new contract.\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h3",{attrs:{id:"membrane-code-store-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#membrane-code-store-contract"}},[e._v("#")]),e._v(" membrane code:store CONTRACT")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Store code on chain.\n\nUSAGE\n  $ terrain code:store [CONTRACT] --signer <value> [--no-rebuild] [--network <value>] [--config-path <value>]\n    [--refs-path <value>] [--keys-path <value>] [--code-id <value>]\n\nFLAGS\n  --code-id=<value>\n  --config-path=<value>  [default: ./config.terrain.json]\n  --keys-path=<value>    [default: ./keys.terrain.js]\n  --network=<value>      [default: localterra]\n  --no-rebuild\n  --refs-path=<value>    [default: ./refs.terrain.json]\n  --signer=<value>       (required)\n\nDESCRIPTION\n  Store code on chain.\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);