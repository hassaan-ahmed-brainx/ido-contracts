import Web3 from "web3";
import ContractAbi from "../abi.json";


export const provider = window.ethereum;
export const contractAddress = '0x9D0deCD63fCcfB9ECf8cBb5bA5BD790D9072C277';
export const web3 = new Web3(provider);
export const myContract = new web3.eth.Contract(
    ContractAbi,
    contractAddress
  );