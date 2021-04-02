function ElectroPribor (type, name) {
    this.type = type;
    this.name = name;
    this.power = +prompt('Введите мощность прибора, Вт');
    this.workingHours = +prompt('Введите время работы прибора, мин');
    this.tariff = 0.25;
    this.powerButtonStatus = false;
    this.on = function () {
        this.powerButtonStatus = true;
        this.working();
    }
    this.working = function() {
        alert('Прибор работает');
    }
    this.off = function() {
        this.powerButtonStatus = false;
    }
    this.result = alert(`Стоимость потребленной электроэнергии равна: ${this.power / 1000 * this.tariff * this.workingHours} руб.`);   
}


console.log(new ElectroPribor ('fen', 'Vitek'));
console.log(new ElectroPribor ('drel', 'Bosch'));