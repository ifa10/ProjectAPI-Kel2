export function validateTourPackage(data: any) {
    const { name, description, price } = data;
    if (!name || !description || typeof price !== 'number') {
      return { valid: false, message: 'Invalid input data' };
    }
    return { valid: true };
  }
  
  export function validateBooking(data: any) {
    const { tourPackageId, paymentStatus } = data;
    if (!tourPackageId || !paymentStatus) {
      return { valid: false, message: 'Invalid input data' };
    }
    return { valid: true };
  }
  