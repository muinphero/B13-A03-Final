//Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }

  const discountAmount = (currentPrice * discount) / 100;
  const newPrice = currentPrice - discountAmount;
  return newPrice.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }

  if (otp.length !== 8) {
    return false;
  } else if (!otp.startsWith("ph-")) {
    return false;
  } else {
    return true;
  }
}

//Problem-03: BCS Final Score Calculator

function finalScore(omr) {
  if (
    typeof omr !== "object" ||
    typeof omr.right !== "number" ||
    typeof omr.wrong !== "number" ||
    typeof omr.skip !== "number"
  ) {
    return "Invalid";
  } else if (omr.right + omr.wrong + omr.skip !== 100) {
    return "Invalid";
  } else {
    const score = omr.right * 1 - omr.wrong * 0.5;
    return Math.round(score);
  }
}
