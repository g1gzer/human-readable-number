module.exports = function toReadable (number) {
    let numb = String(number)
    switch (numb.length) {
        case 1:
            return lenCheck1(numb)
        case 2:
            return lenCheck2(numb)
        case 3:
            return lenCheck3(numb)
    }
}


function lenCheck1(numb) {
    if (numb == '0') return 'zero'
    if (numb == '1') return 'one'
    if (numb == '2') return 'two'
    if (numb == '3') return 'three'
    if (numb == '4') return 'four'
    if (numb == '5') return 'five'
    if (numb == '6') return 'six'
    if (numb == '7') return 'seven'
    if (numb == '8') return 'eight'
    if (numb == '9') return 'nine'
}



function lenCheck2(numb) {
    if (numb == '00') return 'zero'
    if (numb == '10') return 'ten'
    if (numb == '11') return 'eleven'
    if (numb == '12') return 'twelve'
    if (numb == '13') return 'thirteen'
    if (numb == '14') return 'fourteen'
    if (numb == '15') return 'fifteen'
    if (numb == '16') return 'sixteen'
    if (numb == '17') return 'seventeen'
    if (numb == '18') return 'eighteen'
    if (numb == '19') return 'nineteen'
    if (numb == '20') return 'twenty'
    if (numb == '30') return 'thirty'
    if (numb == '40') return 'forty'
    if (numb == '50') return 'fifty'
    if (numb == '60') return 'sixty'
    if (numb == '70') return 'seventy'
    if (numb == '80') return 'eighty'
    if (numb == '90') return 'ninety'
    if (Number(numb) > 20 && Number(numb) < 30)
        return `twenty ${lenCheck1(numb[1])}`
    if (Number(numb) > 30 && Number(numb) < 40)
        return `thirty ${lenCheck1(numb[1])}`
    if (Number(numb) > 40 && Number(numb) < 50)
        return `forty ${lenCheck1(numb[1])}`
    if (Number(numb) > 50 && Number(numb) < 60)
        return `fifty ${lenCheck1(numb[1])}`
    if (Number(numb) > 60 && Number(numb) < 70)
        return `sixty ${lenCheck1(numb[1])}`
    if (Number(numb) > 70 && Number(numb) < 80)
        return `seventy ${lenCheck1(numb[1])}`
    if (Number(numb) > 80 && Number(numb) < 90)
        return `eighty ${lenCheck1(numb[1])}`
    if (Number(numb) > 90 && Number(numb) < 100)
        return `ninety ${lenCheck1(numb[1])}`
    if (numb[0] == '0')
        return lenCheck1(numb[1])
}




function lenCheck3(numb) {
    let result = ''
    let temp = numb[1] + numb[2]
    result += lenCheck1(numb[0]) + ' hundred'
    if (temp == '00')
        return result
    result += ` ${lenCheck2(temp)}`
    return result
}
