function romano(num) {
    const unidadesRomanas = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const decenasRomanas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const centenasRomanas = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
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
        const decenas = Math.floor(num / 10) % 10;
        const centenas = Math.floor(num / 100) % 10;
        const rom = unidadesRomanas[unidades] + decenasRomanas[decenas]+centenasRomanas[centenas];
        return rom;
    }
  }
  
  export default romano;