// Marvish Chandra

class autorepairtire{
    function autorepairtireservices(tireCost){
        fsOilchange = 30;
        conventionalOilchange = 20;
        tireRepair = tireCost + 30;
        towing = 150;
        wheelAlignement = 200;
    }

class vehiclemaintenance{
    function airConditioning(compressorReplacement,hoses,compressorClutch){
        fixAC = compressorReplacement + hoses + compressorClutch; // expected to be 1,000 in total
    }
    function batteryReplacing(partCost,laborCost){
        replaceBattery = partCost + laborCost;
    }
    function beltsandhoses(partsCost,laborCost){
        fix_belts_hoses = partsCost + laborCost;
    }   
    function brakeService(brakePads = 150, changingPads = 270, brakeFluid = 110, rotors = 200, caliper = 130, wheelCylinder){
        totalBrakes = brakePads + changingPads + brakeFluid + rotors + caliper + wheelCylinder;
    }
    function engineLight(){
        engine_light_service = 90;
    }
    function driveLines(drivelinePart,labor){
        total_driveLine = drivelinePart + labor;
    }
    function heatingCoolant(diagnostic = 149.99, cabinFilter = 20, overHeating = 189.99,completeRepair = 5000, DIY = 150, AC){
        heatingCooling = diagnostic + cabinFilter + overHeating + completeRepair + DIY + AC;
    }
    function mufflersandexhaust(diagnosticFee,mufflerCost = 300,exhaustCost){
        muffExhaust_repair = diagnosticFee + mufflerCost + exhaustCost + 200; // 200 being average labor cost
    }
    function steeringSuspensioncost(laborCost,frontSuspension,rearSuspension,powerSteering){
        suspensionCost = laborCost * 100 + frontSuspension + rearSuspension;
        steeringCost = postSteering + laborCost * 100;
    }
    function transmissionCost(transmission,laborCost){
        totalTransmission = transmission + laborCost;
    }
    function tuneUp(){
        totalTune = 200;
    }
    function vehicleElectrical(diagnosticFee = 100, battery, batteryCables, alternator, fuse, starter){
        totalElectrical = diagnosticFee + battery + batteryCables + alternator + fuse + starter;
    }
}
class justireservices{
    function tireInstallation(tireMounting = 24, tireBalance = 40, tireInsurance, tireRefueling = 35){
        totalTire = tireMounting + tireBalance + tireInsurance + tireRefueling;
    }
    function tireRotation(storeService = 120, DIY = 500){
        professional_tire_rotation = storeService;
        home_tire_service = DIY;
    }
    function tire_pressure_monitoring(diagnosticFee, wheel){
        totalTPM = diagnosticFee + wheel * 125;
    }
    function wheelBalancing(){
        totalBalancing = 100;
    }
}
}