"use strict"
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const changeOrAddKeyAndValue = function (obj) {
  const { checkKey, newValue, newObj } = obj;
  const displayValues = Object.keys(newObj);
  const checkInclud = displayValues.includes(checkKey);
  if (checkInclud) {
    newObj[checkKey] = newValue;
  }else{
    newObj[checkKey] = newValue;
  }

  return newObj;
}
const objWithNewElem = changeOrAddKeyAndValue({checkKey: "mood", newValue: "happy", newObj: user});
const objWithNewHobbyValue = changeOrAddKeyAndValue({ checkKey: "hobby", newValue: "skydiving", newObj: objWithNewElem });
const objWithNewPremiumValue = console.log(changeOrAddKeyAndValue({ checkKey: "premium", newValue: false, newObj: objWithNewHobbyValue }));



