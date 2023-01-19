const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-02', '01-06', '01-08', '01-09'],
  water: ['01-02', '01-05'],
  muscle: ['01-03', '01-04']
}

nlwSetup.setData(data)
nlwSetup.load()
