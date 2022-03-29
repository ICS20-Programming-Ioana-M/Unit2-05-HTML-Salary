'use strict'

//This function calculates taxes
function calculate () {
  // input
  hours = parseFloat(document.getElementById('hours-worked').value)
  pay = parseFloat(document.getElementById('total-pay').value)

  // process
  const TOTAL_EARNED = (hours * pay)
  const TAX = (TOTAL_EARNED * 0.18)
  const YOUR_MONEY = (TOTAL_EARNED - TAX)

  // output
  document.getElementById('TOTAL_EARNED').innerHTML = "The amount of money you earned is $" + YOURMONEY + "."
  document.getElementById('TAX').innerHTML = "The amount of money you have to pay is $" + TAX + "."
  document.getElementById('YOUR_MONEY').innerHTML = "The amount of money you get to keep is $" + YOURMONEY + "."
}
