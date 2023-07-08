function crystalOperations(input) {
  let target;
  let chunks;
  [target, ...chunks] = input;

  function washAndTranmsport(chunk) {
    chunk = Math.floor(chunk);
    console.log("Transporting and washing")
    return chunk;
  }

  for (let chunk of chunks) {
    console.log(`Processing chunk ${chunk} microns`);

    while(chunk > target){
        let counter = 0;
        if(chunk / 4 >= target - 1){

            while(chunk / 4 >= target){
                chunk /= 4;
                counter++;
            }

            console.log(`Cut x${counter}`)
            counter = 0;
            chunk = washAndTranmsport(chunk);
        }

        else if(chunk - chunk * 0.2 >= target){
            while (chunk - chunk * 0.2 >= target) {
                chunk -= chunk * 0.2;
                counter++;
            }
            console.log(`Lap x${counter}`)
            counter = 0;
            chunk = washAndTranmsport(chunk);
        }

        else if (chunk - 20 >= target){
            while (chunk - 20 >= target) {
                chunk -= 20;
                counter++;
            }
            console.log(`Grind x${counter}`)
            counter = 0;
            chunk = washAndTranmsport(chunk);
        }

        else if (chunk - 2 >= target - 1){
            while (chunk - 2 >= target - 1) {
                chunk -= 2;
                counter++;
            }
                console.log(`Etch x${counter}`)
                counter = 0;
                chunk = washAndTranmsport(chunk);
        }

        if (chunk + 1 === target) {
            chunk += 1;
            console.log(`X-ray x1`)
        }

    }
    console.log(`Finished crystal ${chunk} microns`)
  }
}

crystalOperations([1000, 4000, 8100]);
crystalOperations([1375, 50000]);
