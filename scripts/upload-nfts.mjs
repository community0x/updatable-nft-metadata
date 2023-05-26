import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

const addNFTs = async () => {
	const drop = await sdk.getContract(
		"0xebCa9017DD10078a3fa42CDBeb735d6De8276c22",
		"nft-drop"
	);

	const urlBase =
		"https://my-json-server.typicode.com/community0x/updatable-nft-metadata/nfts/";
	const numberOfNFTs = 10; // Change this value to the actual number of NFTs

	let urls = [];
	//change i=0 and remove +1
	for (let i = 1; i < numberOfNFTs + 1; i++) {
		urls.push(urlBase + i);
	}
	console.log(urls);
	try {
		await drop.createBatch(urls);
		console.log("uploaded all nfts");
	} catch (error) {
		console.log(error);
	}
};

addNFTs();
