// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./HelloWorld.sol";

contract Manager {

    HelloWorld public helloWorldContract;
    constructor(address helloWorldAddress) {

        helloWorldContract = HelloWorld(helloWorldAddress);

    }
    function doStuff() external view returns (string memory){

        return helloWorldContract.helloWorld();

    }

}