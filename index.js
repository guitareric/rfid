const data = [
  // Simply an array of dummy database data in JSON format
  { name: "fake1 name1", uid: 123456 },
  { name: "fake2 name2", uid: 123457 },
  { name: "fake3 name3", uid: 349564 },
  { name: "fake4 name4", uid: 123459 },
];
const scannedCard = "01010110101101010101010101011111001"; // This will be the 35 bit string that will be returned when a Ucard is read by RFID.
const uidBitStartIndex = 15 - 1; // -1 to account for js indices starting at 0.
const uidBitLength = 20; // We know where the bits we want are, so we will throw out the bits we don't need to get the 6 digit code.
const totalBitLength = scannedCard.length;
const uidBits = scannedCard.substring(
  uidBitStartIndex,
  uidBitStartIndex + uidBitLength
);
console.log("Uid bits are", uidBits); // The irrelevant bits have been removed, we are left with 20 bits that can be converted to the 6 digit code.
const decryptedUid = parseInt(uidBits, 2); // Now we convert the string into an integer using a binary base of 2
console.log("Bits to 6 digit code is", decryptedUid);

// we can now cross-reference the database to see if this card read is valid or not
console.log("Verifying 6 digit code is in database:");
data.forEach((element) => {
  if (element.uid == decryptedUid) {
    // insert the function to open door here
    console.log("uid is valid, door opened");
  }
  // this is an implicit else statement, kind of confusing if you aren't up to date with ES6 JS standard
  console.log("uid is not valid, door not opened");
});
