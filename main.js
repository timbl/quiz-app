console.log('quiz main.js')
const dom = document
// const store = new $rdf.LiveStore()
const store = UI.store
const foo = 'https://timbl.com/timbl/Public/Test/Quiz/0001.ttl'
const quiz =$rdf.sym('https://timbl.com/timbl/Public/Test/Quiz/0001.ttl#this')  // @@@
const quizDoc = quiz.doc()

const form = $rdf.sym('https://timbl.github.io/quiz-app/quiz-form.ttl#QuizForm')
// console.log('FormText: <<< ', formText , '>>>')

store.fetcher.load(quiz).then(
  console.log(' async loaded quiz')
)

$rdf.parse(formText, store, form.doc().uri, 'text/turtle') // Load  directly

async function listener(event) {
  await store.fetcher.load(quiz.doc())
  console.log(' editable?', store.updater.editable(quiz.doc()))
  const main3 = document.getElementById('main')
  // main3.style.backgroundColor = 'yellow'
  UI.widgets.appendForm(dom, main3, {}, quiz, form, quiz.doc())
}
/* like 
dom,
  div,
  {},
  subject,
  form,
  subject.doc(),
  complainIfBad
*/
document.addEventListener('DOMContentLoaded', listener, true)

