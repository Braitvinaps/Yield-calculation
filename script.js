const initMass = document.querySelector('.A');
      totalPills = document.querySelector('.B');
      firstBoot = document.querySelector('.B1');
      secondBoot = document.querySelector('.B2');
      reject = document.querySelector('.C');
      assay = document.querySelector('.D');
      loss = document.querySelector('.E');
      tblWeight1 = document.querySelector('.F1');
      tblWeight2 = document.querySelector('.F2');
      amountTbl1 = document.querySelector('.K1');
      amountTbl2 = document.querySelector('.K2');
      amountTbl = document.querySelector('.K');
      yield = document.querySelector('.Y')
      StdDev1 = document.querySelector('.G1');
      StdDev2 = document.querySelector('.G2');
      minTblWeight1 = document.querySelector('.H1');
      minTblWeight2 = document.querySelector('.H2');
      maxTblWeight1 = document.querySelector('.I1');
      maxTblWeight2 = document.querySelector('.I2');
      minAmountTbl1 = document.querySelector('.Y1');
      minAmountTbl2 = document.querySelector('.Y2');
      maxAmountTbl1 = document.querySelector('.Z1');
      maxAmountTbl2 = document.querySelector('.Z2');


let btn = document.querySelector('button');

function getTotal() {
    totalPills.value = +firstBoot.value + +secondBoot.value;
    totalPills.innerHTML = `Получено таблеток общее B, <b>${totalPills.value.toFixed(1)}</b> кг`; 

    loss.innerHTML =  `Потери E, <b>${(+initMass.value - +totalPills.value - +reject.value - +assay.value).toFixed(4)}</b> кг`;

    amountTbl1.value = (+firstBoot.value * 1000000)/+tblWeight1.value;
    amountTbl2.value = (+secondBoot.value * 1000000)/+tblWeight2.value;
    
    minTblWeight1.value = +tblWeight1.value - StdDev1.value;
    minTblWeight2.value = +tblWeight2.value - StdDev2.value;
    maxTblWeight1.value = +tblWeight1.value + +StdDev1.value;
    maxTblWeight2.value = +tblWeight2.value + +StdDev2.value;

    amountTbl1.innerHTML = `Колличество таблеток после стадии таблетирования K1, первая загрузка, <b>${amountTbl1.value.toFixed(0)}</b>  шт`;
    amountTbl2.innerHTML = `Колличество таблеток после стадии таблетирования K1, вторая загрузка, <b>${amountTbl2.value.toFixed(0)}</b> шт`;

    amountTbl.innerHTML = `Колличество таблеток после стадии таблетирования общее K, <b>${+amountTbl1.value.toFixed(0) + +amountTbl2.value.toFixed(0)}</b> шт`;

    yield.innerHTML = `Выход, <b>${((+totalPills.value/+initMass.value)*100).toFixed(0)}</b> %`;
    
    minTblWeight1.innerHTML = `Min масса таблетки H1, первая загрузка, <b>${minTblWeight1.value.toFixed(1)}</b> мг`;
    minTblWeight2.innerHTML = `Min масса таблетки H1, вторая загрузка, <b>${minTblWeight2.value.toFixed(1)}</b> мг`;
    maxTblWeight1.innerHTML = `Max масса таблетки I1, первая загрузка, <b>${maxTblWeight1.value.toFixed(1)}</b> мг`;
    maxTblWeight2.innerHTML = `Max масса таблетки I2, вторая загрузка, <b>${maxTblWeight2.value.toFixed(1)}</b> мг`;
    
    minAmountTbl1.innerHTML = `Колличество таблеток с Min массой Y1, первая загрузка, <b>${((+firstBoot.value * 1000000)/+minTblWeight1.value).toFixed(0)}</b> шт`;
    minAmountTbl2.innerHTML = `Колличество таблеток с Min массой Y2, вторая загрузка, <b>${((+secondBoot.value * 1000000)/+minTblWeight2.value).toFixed(0)}</b> шт`;
    maxAmountTbl1.innerHTML = `Колличество таблеток с Max массой Z1, первая загрузка, <b>${((+firstBoot.value * 1000000)/+maxTblWeight1.value).toFixed(0)}</b> шт`;
    maxAmountTbl2.innerHTML = `Колличество таблеток с Max массой Z2, вторая загрузка, <b>${((+secondBoot.value * 1000000)/+maxTblWeight2.value).toFixed(0)}</b> шт`;
}

btn.addEventListener('click', getTotal);

