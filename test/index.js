
const { expect } = require('chai');
const LwwSet = require('../index');

describe('Add then remove', () => {
	const element = 'element1';
	const lwwSet = new LwwSet();
	it('should start with no element', () => {
		expect(lwwSet.exist(element)).to.be.false;
		expect(lwwSet.get()).to.be.deep.equal([]);
	});
	it('should have an element when it is added', () => {
		lwwSet.add(element, 2);
		expect(lwwSet.exist(element)).to.be.true;
		expect(lwwSet.get()).to.be.deep.equal([element]);
	});
	it('should still exist when removed at an earlier time', () => {
		lwwSet.remove(element, 1);
		expect(lwwSet.exist(element)).to.be.true;
		expect(lwwSet.get()).to.be.deep.equal([element]);
	});
	it('should not exist when removed at a later time', () => {
		lwwSet.remove(element, 3);
		expect(lwwSet.exist(element)).to.be.false;
		expect(lwwSet.get()).to.be.deep.equal([]);
	});
});

describe('Add same element multiple times', () => {
	const element = 'element1';
	const lwwSet = new LwwSet();
	it('should start with no element', () => {
		expect(lwwSet.exist(element)).to.be.false;
		expect(lwwSet.get()).to.be.deep.equal([]);
	});
	it('should have an element when it is added', () => {
		lwwSet.add(element, 2);
		expect(lwwSet.exist(element)).to.be.true;
		expect(lwwSet.get()).to.be.deep.equal([element]);
	});
	it('should still contain the same element when it is added again at a later time', () => {
		lwwSet.add(element, 5);
		expect(lwwSet.exist(element)).to.be.true;
		expect(lwwSet.get()).to.be.deep.equal([element]);
	});
});

describe('Add 3 elements then remove 1', () => {
	const element1 = 'element1';
	const element2 = 'element2';
	const element3 = 'element3';
	const lwwSet = new LwwSet();
	it('should start with no element', () => {
		expect(lwwSet.exist(element1)).to.be.false;
		expect(lwwSet.exist(element2)).to.be.false;
		expect(lwwSet.exist(element3)).to.be.false;
		expect(lwwSet.get()).to.be.deep.equal([]);
	});
	it('should have an element when it is added', () => {
		lwwSet.add(element1, 2);
		expect(lwwSet.exist(element1)).to.be.true;
		expect(lwwSet.get()).to.be.deep.equal([element1]);
	});
	it('should have 3 elements even if 3 remove and 3 add is issued', () => {
		lwwSet.add(element2, 3);
		lwwSet.remove(element1, 1);
		lwwSet.remove(element2, 2);
		lwwSet.add(element3, 10);
		lwwSet.remove(element3, 5);
		expect(lwwSet.exist(element1)).to.be.true;
		expect(lwwSet.exist(element2)).to.be.true;
		expect(lwwSet.exist(element3)).to.be.true;
		expect(lwwSet.get()).to.be.deep.equal([element1, element2, element3]);
	});
	it('should have 2 elements left when remove is issued at time 15', () => {
		lwwSet.remove(element3, 15);
		lwwSet.remove(element2, 1);
		expect(lwwSet.exist(element1)).to.be.true;
		expect(lwwSet.exist(element2)).to.be.true;
		expect(lwwSet.get()).to.be.deep.equal([element1, element2]);
	});
});
