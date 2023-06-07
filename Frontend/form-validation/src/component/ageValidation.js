export function ageCalculate(dateString) {
    const today = new Date();
    const formatDate = dateString.split("-").reverse().join("-")
    console.log(formatDate);
    const birthDate = new Date(formatDate);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }