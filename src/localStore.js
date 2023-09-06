export function setCityToLocalStorage(city) {
  localStorage.setItem('city', city);
}

export function getCityFromLocalStorage(){
  return localStorage.getItem('city');
}
