function bouncingBall(h,  bounce,  window) {
  let bounces = -1;
  
  if (bounce > 0 && bounce < 1) {
    while (h > window) {      
      h *= bounce;
      bounces += 2;
    }
  }  
  return bounces;
}