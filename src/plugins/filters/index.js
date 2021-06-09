import Vue from 'vue'

Vue.filter('test', function (val, upper) {
  if (!val) {
    return ''
  }
  const val2 = val.toString()

  return upper ? val2.toUpperCase() : val2.toLowerCase()
})

Vue.filter('test2', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toLowerCase()
})

Vue.filter('summa', (value, quote, def, append) => {
	if (!quote) { quote = ','; }
	if (!def) { def = `0${quote}00`; }
	if (value) {
		if (typeof value !== 'number') {
			value = value.toString().replace(/\s+/g, '').replace(/,/g, '.')
			value = parseFloat(value)
			if (Number.isNaN(value)) { value = 0; }
		}
		value = value.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').replace(/\./g, quote)
		if (append) {
			return `${value} ${append}`
		}
		return value
	}
	if (append) {
		return `${def} ${append}`
	}
	return def
})

Vue.filter('amount', (value, def, append) => {
	if (!def) { def = ''; }
	if (value) {
		value = value.toString().replace(/\s+/g, '')
		const spl = value.split('.')
		let dot = ''
		if (spl.length >= 2) {
			const spl1 = spl[1].substr(0, 2)
			if (spl1 === '') {
				dot = '.'
			} else if (spl1 === '0') {
				dot = '.0'
			}
			value = `${spl[0]}.${spl1}`
		}
		value = parseFloat(value)
		if (Number.isNaN(value)) { value = ''; }
		value = value.toString() + dot
		value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		if (append) {
			return `${value} ${append}`
		}
		return value
	}
	if (append) {
		return `${def} ${append}`
	}
	return def.toString()
})

Vue.filter('float', value => {
	if (value) {
		value = value.toString().replace(/\s+/g, '')
		value = (value * 1)
		return !Number.isNaN(value) ? value : 0
	}
	return 0
})

Vue.filter('phone', value => {
	if (value) {
		value = value.toString().replace(/\s+/g, '')
		const regex = /^(\d{0,5})(\d{0,3})(\d{0,2})(\d{0,2})$/g
	  const onlyNumbers = value.replace(/[^\d]/g, '')

	  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
	    [$1, $2, $3, $4].filter(group => !!group).join(' ')
	  )
	}
	return ''
})

Vue.filter('cardNumber', value => {
	if (value) {
		// ✱✱ ✶✶ ∗∗
		value = value.toString().replace(/\s+/g, '')
		if (value.length === 16) {
			var first = value.substr(0, 4)
			var second1 = value.substr(4, 2)
			var second2 = '∗∗'
			var third = '∗∗∗∗'
			var fourth = value.substr(12, 4)
			return first + ' ' + second1 + second2 + ' ' + third + ' ' + fourth
		}
	}
	return value
})

Vue.filter('formatDate', value => { // YYYY-MM-DD -> DD.MM.YYYY
	if (!value) {
    return ''
  }
  value = value.toString().substr(0, 10)
  const [year, month, day] = value.split('-')
  return `${day}.${month}.${year}`
})

Vue.filter('dmY', value => { // Date -> DD.MM.YYYY
	if (value) {
		const date = new Date(value)
		
		let day = date.getDate()
		if (day < 10) {
			day = `0${day}`
		}

		let month = date.getMonth() + 1
		if (month < 10) {
			month = `0${month}`
		}

		const year = date.getFullYear()

		return `${day}.${month}.${year}`
	}
	return ''
})

Vue.filter('qtyMonth', value => {
	if (value) {
		value = value.toString().replace(/M+/g, '')
		var num = parseInt(value)
		if (!isNaN(num)) {
			num = num % 100;
      if (num > 19) {
        num = num % 10;
      }
      switch (num) {
        case 1:
          return `${value} месяц`;
        case 2: case 3: case 4:
          return `${value} месяца`;
        default:
          return `${value} месяцев`;
      }
		}
	}
	return value
})
