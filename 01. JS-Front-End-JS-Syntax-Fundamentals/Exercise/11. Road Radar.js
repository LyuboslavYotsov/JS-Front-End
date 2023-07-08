function checkSpeed(driverSpeed, area) {

    const areaLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }
    
    let currentLimit = areaLimits[area]
    let speedDifference = driverSpeed - currentLimit;

    if (speedDifference <= 0) {
        console.log(`Driving ${driverSpeed} km/h in a ${currentLimit} zone`);
    }

    else
    {
        let status = '';
        if (speedDifference <= 20)
        {
            status = 'speeding'
        }
        else if(speedDifference <= 40)
        {
            status = 'excessive speeding'
        }
        else
        {
            status = 'reckless driving'
        }

        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${currentLimit} - ${status}`);
    }
}

checkSpeed(40, 'city' );
checkSpeed(21, 'residential' );
checkSpeed(120, 'interstate' );