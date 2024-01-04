// Test if a block is clicked
const blockIndex = 2; // Index of the block to simulate click
const mockClickEvent = new MouseEvent('click');
blocks[blockIndex].dispatchEvent(mockClickEvent);