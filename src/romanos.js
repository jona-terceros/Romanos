function romano(num) {
    const unidadesRomanas = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    // if (num == 1)
    // {
    //   return "I"
    // }
    // if (num == 2)
    // {
    //   return "II"
    // }
    // if (num == 3)
    // {
    //   return "III"
    // }
    if (num >= 1 && num <= 3999) {
        const unidades = num % 10;
        const rom = unidadesRomanas[unidades];
        return rom;
    }
  }
  
  export default romano;