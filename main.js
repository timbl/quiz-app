console.log('hello world')
const dom = document
// const store = new $rdf.LiveStore()
const store = UI.store
const quiz =$rdf.sym('https://timbl/com/timbl/Public/Tests/quizes/0001.ttl#this')  // @@@
const quizDoc = quiz.doc()

const form = $rdf.sym('https://timbl.github.io/quiz-app/quiz-form.ttl#QuizForm')

const formText = `
@prefix : <#>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix ui: <http://www.w3.org/ns/ui#> .
@prefix schema: <http://schema.org/'>.


:QuizForm a ui:Form; dct:title "QuizForm form";
    ui:parts (:AnswerTitle :AnswerComment :Questions) .# @@@ TBD

` // formText
$rdf.parse(formText, store, form.doc().uri, 'text/turtle') // Load  directly

async function listener(event) {
  const main3 = document.getElementById('main')
  main3.style.backgroundColor = 'yellow'
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

