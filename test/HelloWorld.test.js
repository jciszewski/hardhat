const { expect } = require('chai');

// Start test block
describe('HelloWorld', function () {
    before(async function () {
        this.HelloWorld = await ethers.getContractFactory('HelloWorld');
    });
    beforeEach(async function () {
        this.helloWorld = await this.HelloWorld.deploy();
        await this.helloWorld.deployed();
    });
    // Test case
    it('test return value is Hello World', async function () {
        // Store a value
        await this.helloWorld.helloWorld();

        // Test if the returned value is the same one
        expect((await this.helloWorld.helloWorld()).toString()).to.equal('Hello World');
    });
});
