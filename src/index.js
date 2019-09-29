function testOptionalChaining() {
  const nestedObj = {
    address: {
      country: 'india',
    },
  };

  console.log('area:', nestedObj?.address?.country);
  console.log('area:', nestedObj?.wrong?.prop);
}

testOptionalChaining();

const sum = (a, b) => a + b;

export default sum;
