const Room = require('../schemas/room');
const Chat = require('../schemas/chat');
const crypto = require('crypto');

exports.removeRoom = async (roomId) => {
  try {
    const randomName = generateRandomName();
    console.log(`Generated random name: ${randomName}`);
    
    await Room.deleteOne({ _id: roomId });
    await Chat.deleteMany({ room: roomId });

    return randomName; 
  } catch (error) {
    throw error;
  }
};


function generateRandomName() {
  const names = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India'];
  const randomIndex = Math.floor(Math.random() * names.length);
  return `${names[randomIndex]}-${crypto.randomBytes(3).toString('hex')}`;
}