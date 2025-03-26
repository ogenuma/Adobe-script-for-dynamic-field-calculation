var grossPremium = this.getField("Gross PremiumRow1").value;
var percentage = this.getField("Comm % 1").value;

// Correctly interpret the percentage (divide by 100)
var commAmt = (grossPremium * (percentage / 100)).toFixed(2);
this.getField("Comm Amt1").value = commAmt;

// Calculate Net to Carrier by subtracting Comm Amt from Gross Premium
var netToCarrier = (grossPremium - commAmt).toFixed(2);
this.getField("Net to Carrier 1").value = netToCarrier;